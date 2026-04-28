import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Pagemnotfound } from './pagemnotfound/pagemnotfound';
import { register } from 'module';
import path from 'path';
import { Home } from './home/home';
import { AdminDashboard } from './dashboard/admin-dashboard/admin-dashboard';
import { Myprofile } from './myprofile/myprofile';
import { ProfileSettings } from './profile-settings/profile-settings';
import { Settings } from './settings/settings';
import { Notifications } from './notifications/notifications';
import { Securitysetings } from './securitysetings/securitysetings';
import { AddStudent } from './add-new/add-student/add-student';
import { AddTeacher } from './add-new/add-teacher/add-teacher';
import { StudentDashboard } from './dashboard/student-dashboard/student-dashboard';
import { AddStaf } from './add-new/add-staf/add-staf';
import { TeacherDashboard } from './dashboard/teacher-dashboard/teacher-dashboard';
import { ParentDashboard } from './parent-dashboard/parent-dashboard';
import { DashboardModule } from './dashboard/dashboard-module';

const routes: Routes = [
  {path:"",component:Login},
  {path:"register",component:Register},
  {path:"forgotpassword", component: ForgotPassword},
  {path:"login",component:Login},
 
 
  {path:"home",component:Home ,children: [
    { path:"dashboard",
      loadChildren:()=>
        import('./dashboard/dashboard-module').then((m)=>m.DashboardModule)
    },
     {
      path:"add-new",
      loadChildren:()=>
        import('./add-new/add-new-module').then((m)=>m.AddNewModule)
    },
    
       {path:"myprofile",component:Myprofile},
       {path:"settings",component:Settings,children:[
         {path:"profile-settings",component:ProfileSettings},
         
         {path:"security-settings",component:Securitysetings},
         {path:"notifications",component:Notifications}
       ]  }
    ]},
    
  {path:"admindashboard",component:AdminDashboard},
  {path:"**",component:Pagemnotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
