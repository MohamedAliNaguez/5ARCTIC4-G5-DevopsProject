import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkierService } from '../../services/skier.service';
import { Skier } from '../../model/skier';

@Component({
  selector: 'app-skier-detail',
  templateUrl: './skier-detail.component.html',
  styleUrls: ['./skier-detail.component.css'],
})
export class SkierDetailComponent implements OnInit {
  skier?: Skier;

  constructor(
    private route: ActivatedRoute,
    private skierService: SkierService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skierService.getSkier(id).subscribe((data) => {
      this.skier = data;
    });
  }
}
