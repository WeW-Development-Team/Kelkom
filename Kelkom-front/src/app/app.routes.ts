import { Routes } from '@angular/router';
import { publicRoutes } from './components/public/public.routing'

export const routes: Routes = [
  {
    path: 'public',
    children: publicRoutes
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public', pathMatch: 'full' }
];
