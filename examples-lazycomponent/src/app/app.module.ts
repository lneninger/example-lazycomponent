import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/material/sharedmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full'
      },
      {
        path: 'primeng-steps-styling',
        loadChildren: () => import('./features/primeng-steps/primeng-steps.module').then(m => m.PrimengStepsModule),
        pathMatch: 'full'
      }

    ]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
