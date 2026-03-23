import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { LandingPage } from './components/landing-page/landing-page';
import { ForgotPassword } from './components/auth/forgot-password/forgot-password';
import { Register } from './components/auth/register/register';

export const routes: Routes = [
    {path: 'login', component:Login},
    {path: 'register', component:Register},
    {path: 'forgot-password', component:ForgotPassword},

    {path: '', component:LandingPage}
];
