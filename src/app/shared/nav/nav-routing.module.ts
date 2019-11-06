import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Navroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hr',
        loadChildren: () => import('./hr/hr.module').then(m => m.HrModule),
        data: { title: 'Choose A Demo' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Navroutes)],
  exports: [RouterModule],
})
export class NavRoutingModule {}
