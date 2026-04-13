import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Register } from './register/register';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Pagemnotfound } from './pagemnotfound/pagemnotfound';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
