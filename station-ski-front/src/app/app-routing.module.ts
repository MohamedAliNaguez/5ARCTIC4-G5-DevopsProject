import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SkierListComponent } from './skier/skier-list/skier-list.component';
import { SkierFormComponent } from './skier/skier-form/skier-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'skiers', component: SkierListComponent },
  { path: 'skiers/new', component: SkierFormComponent },
  { path: 'skiers/edit/:id', component: SkierFormComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
