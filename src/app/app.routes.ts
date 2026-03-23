import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { LandingPage } from './components/landing-page/landing-page';

export const routes: Routes = [
    {path: 'login', component:Login},
    {path: '', component:LandingPage}
];
