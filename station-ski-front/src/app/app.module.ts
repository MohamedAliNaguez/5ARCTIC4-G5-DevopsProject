import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkierListComponent } from './skier/skier-list/skier-list.component';
import { SkierDetailComponent } from './skier/skier-detail/skier-detail.component';
import { SkierFormComponent } from './skier/skier-form/skier-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        SkierListComponent,
        SkierDetailComponent,
        SkierFormComponent,
        DashboardComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, AppRoutingModule, FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
