import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module').then((m) => m.LandingModule),
  },
];

// {
//   path: "auth",
//   loadChildren: () =>
//     import("./features/auth/auth.module").then((m) => m.AuthModule),
//   canActivate: [AuthGuard],
// },
