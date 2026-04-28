import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { TeacherDashboard } from './teacher-dashboard/teacher-dashboard';
import { StudentDashboard } from './student-dashboard/student-dashboard';
import { ParentDashboard } from '../parent-dashboard/parent-dashboard';


const routes: Routes = [
  {
    path: 'admindashboard',component:AdminDashboard,
  },
  {
    path:"teacherdashboard",component:TeacherDashboard,
  },
  {
    path:"studentdashboard", component :StudentDashboard,
  },
  {
    path :"parentdashboard",component :ParentDashboard,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}

