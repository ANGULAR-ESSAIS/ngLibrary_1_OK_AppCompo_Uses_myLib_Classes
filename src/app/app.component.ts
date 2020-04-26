import { Component, OnInit,

         AfterViewInit, ViewChild,
         ChangeDetectorRef, ChangeDetectionStrategy // Juste pour une histoire de ExpressionChangedAfterItHasBeenCheckedError
                                                    // car modif. par code, du Compo(de ma lib), après son ngOnInit.
       } from '@angular/core';

import {Item, MyNgLibComponent} from 'my-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
   oItem: Item;
   oChildItem: Item;

   @ViewChild(MyNgLibComponent, {static: true})
   private oMyNgLibComponent: MyNgLibComponent;

  constructor(private oChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.oItem = new Item('2', 'MAMA');
    window.setTimeout(() => {
      this.oItem.setLabel('MUMU');
    }, 3000);
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.oChildItem = this.oMyNgLibComponent.getItem();
      this.oChildItem.setLabel('MOMO');
      this.oChangeDetectorRef.detectChanges(); // << Sinon Error : ExpressionChangedAfterItHasBeenCheckedError
    }, 1500);
  }

}
