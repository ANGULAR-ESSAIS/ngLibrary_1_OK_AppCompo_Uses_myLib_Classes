import { Component, OnInit,
         AfterViewInit, ViewChild,
         ChangeDetectorRef, ChangeDetectionStrategy
       } from '@angular/core';

// import {Item} from 'my-ng-lib/lib/modeles/Item';
// import { MyNgLibComponent } from 'my-ng-lib/lib/my-ng-lib.component';

import * as XX from './../../dist/my-ng-lib/fesm2015/my-ng-lib.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
   oItem: XX.Item;
   oChildItem: XX.Item;

   @ViewChild(XX.MyNgLibComponent, {static: true})
   private oMyNgLibComponent: XX.MyNgLibComponent;

  constructor(private oChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.oItem = new XX.Item('2', 'MAMA');
    this.oItem.setLabel('MUMU');
  }

  ngAfterViewInit() {
    this.oChildItem = this.oMyNgLibComponent.getItem();
    this.oChildItem.setLabel('MOMO');
    this.oChangeDetectorRef.detectChanges(); // Sinon Error : ExpressionChangedAfterItHasBeenCheckedError
  }

}
