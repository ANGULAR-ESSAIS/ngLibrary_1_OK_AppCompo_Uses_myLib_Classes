import { Component, OnInit,

        //  AfterViewInit, ViewChild,
        //  ChangeDetectorRef, ChangeDetectionStrategy // Juste pour une histoire de ExpressionChangedAfterItHasBeenCheckedError
                                                    // car modif. par code, du Compo(de ma lib), après son ngOnInit.
       } from '@angular/core';

import {
  Item, IItem,
  ComboBoxComponent, /*, MyNgLibComponent*/
  IMultiChoicesable, IMonoChoiceable
} from 'my-ng-lib';

import { IPays } from './pays/modeles/interfaces/IPays';
import { PaysService } from './pays/services/pays.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit/*, AfterViewInit*/ {
  //  oItem: Item;
  //  oChildItem: Item;

   sSelectedPaysId: string = "";
   aPays: Array<IPays> = [];

  //  @ViewChild(MyNgLibComponent, {static: true})
  //  private oMyNgLibComponent: MyNgLibComponent;

  constructor(
    private oPaysService: PaysService
    /*private oChangeDetectorRef: ChangeDetectorRef*/
  ) {
    this.sSelectedPaysId = "1";
    this.aPays = this.oPaysService.getListe();
  }

  ngOnInit() {
    // this.oItem = new Item('2', 'MAMA');
    // this.aItems = this.oPaysService.getListe();
    // [
    //   this.oItem,
    //   new Item('72', 'MOMOOO')
    // ];
    // window.setTimeout(() => {
    //   this.oItem.setLabel('MUMU');
    // }, 3000);

  }

  // ngAfterViewInit() {
  //   window.setTimeout(() => {
  //     this.oChildItem = this.oMyNgLibComponent.getItem();
  //     this.oChildItem.setLabel('MOMO');
  //     this.oChangeDetectorRef.detectChanges(); // << Sinon Error : ExpressionChangedAfterItHasBeenCheckedError
  //   }, 1500);
  // }

  onChangeMultiPays(poMultiChoiceable: IMultiChoicesable) {
    const aSelectedItemsId: Array<string> = poMultiChoiceable.getSelectedItemsId();
    console.log("ID pays choisi(s) : "+aSelectedItemsId);
    console.log('Items correspondant: ', "\n");
    aSelectedItemsId.forEach((psId: string) => {
      console.log("   ", this.oPaysService.getById(psId) );
    });
  }

  onChangePays(poMultiChoiceable: IMonoChoiceable) {
    const sSelectedItemId: string = poMultiChoiceable.getSelectedItemId();
    console.log("ID du pays choisi : "+sSelectedItemId);
    console.log('Item correspondant: ', "\n");
    console.log("   ", this.oPaysService.getById(sSelectedItemId) );
  }

}
