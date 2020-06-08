import { Component } from '@angular/core';
import { LayoutService } from './shared/layout.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

interface FoodNode {
  name: string;
  routerLink?: any[];
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard', routerLink: ['/404']
  }, {
    name: 'Admin',
    children: [
      {
        name: 'Users',
        children: [
          {name: 'Add', routerLink: ['/404']},
          {name: 'Role Management', routerLink: ['/404']},
        ]
      }, {
        name: 'Settings',
        children: [
          {name: 'System Configuration', routerLink: ['/404']},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples-lazycomponent';

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(public service: LayoutService) {
    this.dataSource.data = TREE_DATA;
  }



  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
