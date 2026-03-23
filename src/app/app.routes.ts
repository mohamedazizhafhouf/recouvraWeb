import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { LandingPage } from './components/landing-page/landing-page';
import { ForgotPassword } from './components/auth/forgot-password/forgot-password';

export const routes: Routes = [
    {path: 'login', component:Login},
    {path: 'forgot-password', component:ForgotPassword},

    {path: '', component:LandingPage}
];
