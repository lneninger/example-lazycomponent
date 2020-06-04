import { Component } from '@angular/core';
import { LayoutService } from './shared/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'examples-lazycomponent';


  constructor(public service: LayoutService) {

  }
}
