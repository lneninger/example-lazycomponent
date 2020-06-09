import { DashboardComponent } from './../../dashboard.component';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { LazyLoaderService } from 'src/app/shared/utils/lazy-loader/lazy-loader-service';
import { LazyLoadedWidgets } from 'src/app/app-routing-lazy.ts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @HostBinding('style.height') height = '100%';
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex') flex = '100%';

  myControl = new FormControl();


  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private lazyLoaderService: LazyLoaderService){

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  close() {
    console.log('Confirm button pressed');
    // alert('Confirm button pressed');
    this.lazyLoaderService.unload(LazyLoadedWidgets.DASHBOARD_STATISTICS, DashboardComponent);
  }

}
