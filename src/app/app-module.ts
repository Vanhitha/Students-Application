import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Pagemnotfound } from './pagemnotfound/pagemnotfound';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { AdminDashboard } from './dashboard/admin-dashboard/admin-dashboard';
import { Myprofile } from './myprofile/myprofile';
import { ProfileSettings } from './profile-settings/profile-settings';
import { Settings } from './settings/settings';
import { Securitysetings } from './securitysetings/securitysetings';
import { AddStudent } from './add-new/add-student/add-student';
import { StudentDashboard } from './dashboard/student-dashboard/student-dashboard';
import { TeacherDashboard } from './dashboard/teacher-dashboard/teacher-dashboard';
import { ParentDashboard } from './parent-dashboard/parent-dashboard';
import { AddTeacher } from './add-new/add-teacher/add-teacher';
import { AddStaf } from './add-new/add-staf/add-staf';
import { Invoice } from './invoice/invoice';
import { BaseChartDirective   } from 'ng2-charts';
// import { AddDetailsPopup } from './add-details-popup/add-details-popup';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    ForgotPassword,
    Pagemnotfound,
    Home,
    Sidebar,
    Header,
    AdminDashboard,
    Myprofile,
    ProfileSettings,
    Settings,
    Securitysetings,
    AddStudent,
    StudentDashboard,
    TeacherDashboard,
    ParentDashboard,
    AddStaf,
    Invoice,
    AddTeacher,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
