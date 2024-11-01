import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SkierListComponent } from './skier/skier-list/skier-list.component';
import { SkierFormComponent } from './skier/skier-form/skier-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkierDetailComponent } from './skier/skier-detail/skier-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';

const routes: Routes = [
  { path: 'skiers', component: SkierListComponent },
  { path: 'skiers/new', component: SkierFormComponent },
  { path: 'skiers/edit/:id', component: SkierFormComponent },
  { path: 'skiers/:id', component: SkierDetailComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/edit/:id', component: CourseFormComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
