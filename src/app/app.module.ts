import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppMaterialModule} from '../app/material/app-material/app-material.module';
import { MainlayoutComponent } from './shared/layout/mainlayout/mainlayout.component';
import { NavComponent } from './shared/nav/nav.component';
import { rootRouterConfig } from './app-routing.module';
import { MenuItemsComponent } from './shared/nav/menu-items/menu-items.component';
import { NavService } from '../app/shared/service/nav.service';
import {NavModule} from "./shared/nav/nav.module"
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    NavComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        blacklistedRoutes: ['localhost:8081/api/signin']
      },
    }),

  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
