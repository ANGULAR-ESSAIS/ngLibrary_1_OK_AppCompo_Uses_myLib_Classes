import { Component, OnInit,
         AfterViewInit, ViewChild,
         ChangeDetectorRef, ChangeDetectionStrategy
       } from '@angular/core';

import {Item, MyNgLibComponent} from 'my-ng-lib';
// import * as XX from 'my-ng-lib/lib/modeles/Item';
// import { MyNgLibComponent } from 'my-ng-lib/lib/my-ng-lib.component';

// import * as XX from './../../dist/my-ng-lib/fesm2015/my-ng-lib.js'; //OK mais bof...

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  //  oItem: XX.Item;
  //  oChildItem: XX.Item;
   oItem: Item;
   oChildItem: Item;

  //  @ViewChild(XX.MyNgLibComponent, {static: true})
  //  private oMyNgLibComponent: XX.MyNgLibComponent;
   @ViewChild(MyNgLibComponent, {static: true})
   private oMyNgLibComponent: MyNgLibComponent;

  constructor(private oChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // this.oItem = new XX.Item('2', 'MAMA');
    this.oItem = new Item('2', 'MAMA');
    window.setTimeout(() => {
      this.oItem.setLabel('MUMU');
    }, 3000);
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.oChildItem = this.oMyNgLibComponent.getItem();
      this.oChildItem.setLabel('MOMO');
      this.oChangeDetectorRef.detectChanges(); // Sinon Error : ExpressionChangedAfterItHasBeenCheckedError
    },1500);
  }

}
