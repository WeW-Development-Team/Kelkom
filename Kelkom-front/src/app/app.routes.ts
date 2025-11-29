import { Routes } from '@angular/router';
import { MainPublicPage } from './components/public/main-public-page/main-public-page';

export const routes: Routes = [
    {path: '', component: MainPublicPage },
    {path: '**', component: MainPublicPage } //Allways last
];
