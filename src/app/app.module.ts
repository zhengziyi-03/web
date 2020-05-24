import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';
import { ManagementComponentComponent } from './management-component/management-component.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';

const mgtChildrenRoutes: Routes = [ 
  { path: 'user', component: UserManagementComponentComponent },   
  { path: '', redirectTo: 'user', pathMatch: 'full' } 
];

const routes: Routes = [ 
  { path: 'home', component: HomeComponentComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponentComponent }, 
  { 
    path: 'management', 
    component: ManagementComponentComponent,
    children: mgtChildrenRoutes,
    canActivate: [LoginGuard], } 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ManagementComponentComponent,
    UserManagementComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
