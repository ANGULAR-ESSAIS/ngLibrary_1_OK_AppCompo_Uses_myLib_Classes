import { Component, OnInit } from '@angular/core';

import { Item } from './modeles/Item';

@Component({
  selector: 'lib-my-ng-lib',
  templateUrl: './my-ng-lib.component.html',
  styles: []
})
export class MyNgLibComponent implements OnInit {

  oItem: Item;

  constructor() { }

  ngOnInit() {
    this.oItem = new Item('1', 'Mimi');
  }

}
