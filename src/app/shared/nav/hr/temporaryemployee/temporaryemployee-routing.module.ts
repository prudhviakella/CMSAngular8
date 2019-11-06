import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRequestComponent } from '../temporaryemployee/create-request/create-request.component';
import { MapEmployeeComponent } from '../temporaryemployee/map-employee/map-employee.component';
import { ViewstatusComponent } from '../temporaryemployee/viewstatus/viewstatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../../../material/app-material/app-material.module';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createrequest',
        component: CreateRequestComponent,
        data: { title: 'createrequest' },
      },
      {
        path: 'maptmpemployee',
        component: MapEmployeeComponent,
        data: { title: 'ForgetPassword' },
      },
      {
        path: 'viewtmpempstatus',
        component: ViewstatusComponent,
        data: { title: 'ForgetPassword' },
      },
    ],
  },
];

@NgModule({
  declarations: [CreateRequestComponent, MapEmployeeComponent, ViewstatusComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule, AppMaterialModule],
  exports: [RouterModule],
})
export class TemporaryemployeeRoutingModule {}
