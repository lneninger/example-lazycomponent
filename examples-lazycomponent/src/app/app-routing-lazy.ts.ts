import { NgModuleFactory, Type } from '@angular/core';
import { LazyRoute } from './shared/utils/lazy-loader/lazy-loader-service';

export const LazyLoadedWidgets = {
  DASHBOARD_STATISTICS: 'dashboard-statistics'
};



export const lazyWidgets: LazyRoute[] = [
  {
    path: LazyLoadedWidgets.DASHBOARD_STATISTICS,
    loadChildren: () => import('./features/dashboard/+lazy-components/statistics/statistics.module').then(m => m.StatisticsModule),
  }
];
