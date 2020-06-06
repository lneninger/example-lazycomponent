import { LazyLoadedWidgets } from './../../app-routing-lazy.ts';
import { LazyLoaderService, LAZY_WIDGETS } from './../../shared/utils/lazy-loader/lazy-loader-service';
import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { LazyLoaderDirective } from 'src/app/shared/utils/lazy-loader/lazy-loader.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChildren(LazyLoaderDirective)
  lazyloaderMarkups: QueryList<LazyLoaderDirective>;

  constructor(private lazyLoaderService: LazyLoaderService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.lazyLoaderService.initialize(DashboardComponent, this.lazyloaderMarkups);
  }


  confirm() {
    console.log('Confirm button pressed');
    // alert('Confirm button pressed');
    this.lazyLoaderService.load(LazyLoadedWidgets.DASHBOARD_STATISTICS, DashboardComponent);
  }
}
