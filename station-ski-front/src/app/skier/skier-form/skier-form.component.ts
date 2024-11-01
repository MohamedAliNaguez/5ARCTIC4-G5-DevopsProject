import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkierService } from '../../services/skier.service';
import { Skier } from '../../model/skier';

@Component({
  selector: 'app-skier-form',
  templateUrl: './skier-form.component.html',
})
export class SkierFormComponent implements OnInit {
  skier: Skier = {
    numSkier: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    city: '',
  };

  isEditMode = false;

  constructor(
    private skierService: SkierService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.skierService.getSkier(+id).subscribe((data) => {
        this.skier = data;
      });
    }
  }

  saveSkier(): void {
    if (this.isEditMode) {
      this.skierService
        .updateSkier(this.skier.numSkier!, this.skier)
        .subscribe(() => {
          this.router.navigate(['/skiers']);
        });
    } else {
      this.skierService.addSkier(this.skier).subscribe(() => {
        this.router.navigate(['/skiers']);
      });
    }
  }
}
