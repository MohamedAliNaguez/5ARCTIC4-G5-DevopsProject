import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course, TypeCourse, Support } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
})
export class CourseFormComponent implements OnInit {
  course: Course = {
    numCourse: 0,
    level: 0,
    typeCourse: TypeCourse.BEGINNER, // Initialize with a valid enum value
    support: Support.SKI, // Initialize with a valid enum value
    price: 0,
    timeSlot: 0,
  };

  isEditMode = false;
  typeCourses = Object.values(TypeCourse); // Add this line
  supports = Object.values(Support); // Add this line

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.courseService.getCourse(+id).subscribe((data) => {
        this.course = data;
      });
    }
  }

  saveCourse(): void {
    if (this.isEditMode) {
      this.courseService
        .updateCourse(this.course.numCourse!, this.course)
        .subscribe(() => {
          this.router.navigate(['/courses']);
        });
    } else {
      this.courseService.addCourse(this.course).subscribe(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
