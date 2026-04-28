import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaf } from './add-staf/add-staf';
import { AddTeacher } from './add-teacher/add-teacher';
import { AddStudent } from './add-student/add-student';

const routes: Routes = [
  {path:"add-student",component:AddStudent},
  {path:"add-teacher",component:AddTeacher},
  {path:"add-staf",component:AddStaf},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRoutingModule {}
