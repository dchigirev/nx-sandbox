import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    component: NxWelcome,
  },
];
