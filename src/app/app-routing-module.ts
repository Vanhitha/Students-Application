import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Pagemnotfound } from './pagemnotfound/pagemnotfound';
import { register } from 'module';
import path from 'path';
import { Home } from './home/home';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Myprofile } from './myprofile/myprofile';

const routes: Routes = [
  {path:"",component:Login},
  {path:"register",component:Register},
  {path:"forgotpassword", component: ForgotPassword},
  {path:"login",component:Login},
 
  {path:"home",component:Home ,children: [
      { path: 'admindashboard', component: AdminDashboard },
       {path:"myprofile",component:Myprofile},
    ]},
  {path:"admindashboard",component:AdminDashboard},
  {path:"**",component:Pagemnotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
