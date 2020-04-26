import { Component, OnInit } from '@angular/core';

import { IMultiChoicesable, IMonoChoiceable } from 'my-ng-lib';

import { IPays } from './pays/modeles/interfaces/IPays';
import { PaysService } from './pays/services/pays.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

   sSelectedPaysId: string = "";
   aPays: Array<IPays> = [];

  constructor(
    private oPaysService: PaysService
  ) {
    this.sSelectedPaysId = "1";
    this.aPays = this.oPaysService.getListe();
  }

  ngOnInit() {

  }

  onChangeMultiPays(poMultiChoiceable: IMultiChoicesable) {
    console.log('\n\n');
    const aSelectedItemsId: Array<string> = poMultiChoiceable.getSelectedItemsId();
    console.log("ID pays choisi(s) : "+aSelectedItemsId);
    console.log('Items correspondant: ', "\n");
    aSelectedItemsId.forEach((psId: string) => {
      console.log("   ", this.oPaysService.getById(psId) );
    });
  }

  onChangePays(poMultiChoiceable: IMonoChoiceable) {
    const sSelectedItemId: string = poMultiChoiceable.getSelectedItemId();
    console.log('\n\n');
    console.log("ID du pays choisi : "+sSelectedItemId);
    console.log('Item correspondant: ', "\n");
    console.log("   ", this.oPaysService.getById(sSelectedItemId) );
  }

}
