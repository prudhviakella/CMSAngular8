import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemporaryemployeeRoutingModule } from './temporaryemployee-routing.module';
import { CreateRequestComponent } from './create-request/create-request.component';
import { MapEmployeeComponent } from './map-employee/map-employee.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateRequestComponent, MapEmployeeComponent, ViewstatusComponent],
  imports: [
    CommonModule,
    TemporaryemployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TemporaryemployeeModule { }
