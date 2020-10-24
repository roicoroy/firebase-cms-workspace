import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'media',
        children: [
          {
            path: '',
            loadChildren: () => import('../media/media.module').then(m => m.MediaPageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {

        path: 'edit',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/edit/edit.module').then(m => m.EditPageModule),
            // canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
