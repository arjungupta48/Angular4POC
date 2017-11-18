import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service'
import {AuthGuard} from './auth.guard';

import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { EmployeesComponent } from './employees/employees.component';
import {DataTablesModule} from 'angular-datatables';
import { StudentListComponent } from './student-list/student-list.component';

import {HttpModule} from '@angular/http';
import {StudentService} from './student.service';
import { BrowserComponent } from './browser/browser.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'employees',
    canActivate: [AuthGuard],
    component: EmployeesComponent
  },
  {
    path: 'students-list',
    canActivate: [AuthGuard],
    component: StudentListComponent
  },
  {
    path: 'browser',
    canActivate: [AuthGuard],
    component: BrowserComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
   {
    path: 'login',
    component: LoginFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    EmployeesComponent,
    StudentListComponent,
    BrowserComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxPaginationModule,
    DataTablesModule,
    HttpModule
  ],
  providers: [UserService, AuthGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
