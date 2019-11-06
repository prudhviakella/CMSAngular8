import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {AppMaterialModule} from '../../material/app-material/app-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent,SpinnerComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule { }
