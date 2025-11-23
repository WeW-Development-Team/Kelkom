import { Routes } from '@angular/router';
import { LandingPage } from './components/public/landing-page/landing-page';

export const routes: Routes = [
    {path: '', component: LandingPage },
    {path: '**', component: LandingPage } //Allways last
];
