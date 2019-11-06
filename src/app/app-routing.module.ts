import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/shared/helpers/auth.gaurd';
import { MainlayoutComponent } from '../app/shared/layout/mainlayout/mainlayout.component';
import {LoginComponent} from '../app/shared/auth/login/login.component';
import {NavComponent} from '../app/shared/nav/nav.component';
export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'mainlayout',
    pathMatch: 'full'
  },
  {
    path: 'mainlayout',
    component: NavComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/shared/nav/nav.module').then(m => m.NavModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/shared/auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Choose A Demo' }
  },
];
