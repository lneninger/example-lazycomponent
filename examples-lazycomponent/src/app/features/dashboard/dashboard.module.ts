import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyLoaderModule } from 'src/app/shared/utils/lazy-loader/lazy-loader.module';
import { LazyLoadedWidgets } from 'src/app/app-routing-lazy.ts';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]),
    LazyLoaderModule.config([
      {
        path: LazyLoadedWidgets.DASHBOARD_STATISTICS,
        loadChildren: () => import('./+lazy-components/statistics/statistics.module').then(m => m.StatisticsModule)
      }
    ])
  ]
})
export class DashboardModule { }
