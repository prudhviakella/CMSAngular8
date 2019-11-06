import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HrRoutingModule} from "./hr-routing.module"
import {TemporaryemployeeModule} from "./temporaryemployee/temporaryemployee.module"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HrModule { }
