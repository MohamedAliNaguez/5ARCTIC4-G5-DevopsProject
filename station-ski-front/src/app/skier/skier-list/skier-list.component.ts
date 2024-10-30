import { Component, OnInit } from '@angular/core';
import { SkierService } from '../../services/skier.service';
import { Skier } from '../../model/skier';

@Component({
  selector: 'app-skier-list',
  templateUrl: './skier-list.component.html',
})
export class SkierListComponent implements OnInit {
  skiers: Skier[] = [];

  constructor(private skierService: SkierService) {}

  ngOnInit(): void {
    this.getSkiers();
  }

  getSkiers(): void {
    this.skierService.getSkiers().subscribe((data) => {
      this.skiers = data;
    });
  }

  deleteSkier(id: number): void {
    this.skierService.deleteSkier(id).subscribe(() => {
      this.skiers = this.skiers.filter((skier) => skier.numSkier !== id);
    });
  }
}
