import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatProgressSpinnerModule
 } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class AppMaterialModule { }
