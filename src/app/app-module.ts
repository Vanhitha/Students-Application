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
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Myprofile } from './myprofile/myprofile';
import { ProfileSettings } from './profile-settings/profile-settings';
import { Settings } from './settings/settings';
import { Securitysetings } from './securitysetings/securitysetings';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
