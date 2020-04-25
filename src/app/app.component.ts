import { Component, OnInit } from '@angular/core';

import {Item} from 'my-ng-lib/lib/modeles/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oItem: Item;

  constructor() { }

  ngOnInit() {
    this.oItem = new Item('2', 'MAMA');
  }
}
