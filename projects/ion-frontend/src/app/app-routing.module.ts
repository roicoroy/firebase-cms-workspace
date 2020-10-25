import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './shared/guards/auth.guard';
// import { LoginGuard } from './shared/guards/login.guard';
// import { RegisterGuard } from './shared/guards/register.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule),
    // canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule),
    // canActivate: [RegisterGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'media',
  //   loadChildren: () => import('./pages/media/media.module').then(m => m.MediaPageModule),
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
  //   // canActivate: [AuthGuard]  
  // },
  // {
  //   path: 'edit',
  //   loadChildren: () => import('./pages/profile/edit/edit.module').then(m => m.EditPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
