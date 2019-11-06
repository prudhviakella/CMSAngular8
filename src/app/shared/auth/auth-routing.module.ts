import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const Authroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' },
      },
      {
        path: 'forgot-password',
        component: ForgetPasswordComponent,
        data: { title: 'ForgetPassword' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Authroutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
