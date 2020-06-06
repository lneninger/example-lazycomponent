import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


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

}
