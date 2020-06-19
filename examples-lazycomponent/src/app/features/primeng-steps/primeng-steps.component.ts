import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-primeng-steps',
  templateUrl: './primeng-steps.component.html',
  styleUrls: ['./primeng-steps.component.scss']
})
export class PrimengStepsComponent implements OnInit {

  items: MenuItem[] = [
    { label: 'Step 1', styleClass: 'icon check' },
    { label: 'Step 2' },
    { label: 'Step 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
