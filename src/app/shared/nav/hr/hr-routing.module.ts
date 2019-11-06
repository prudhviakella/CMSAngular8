import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const Hrroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tmpemployee',
        loadChildren: () =>
          import('./temporaryemployee/temporaryemployee-routing.module').then(m => m.TemporaryemployeeRoutingModule),
        data: { title: 'Choose A Demo' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Hrroutes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
