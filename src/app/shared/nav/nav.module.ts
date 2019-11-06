import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavRoutingModule } from './nav-routing.module';
import { HrRoutingModule } from './hr/hr-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavRoutingModule,

  ],

  providers: []
})
export class NavModule { }
