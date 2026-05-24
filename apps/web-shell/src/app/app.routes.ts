import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const appRoutes: Route[] = [
  {
    path: 'hangar',
    loadChildren: () => import('hangar/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'webTwo',
    loadChildren: () => import('webTwo/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'webOne',
    loadChildren: () => import('webOne/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
