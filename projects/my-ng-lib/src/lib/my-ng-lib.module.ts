import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { MyNgLibComponent } from './components/my-ng-lib-compo/my-ng-lib.component';
import { ComboBoxComponent } from './components/combo-box/combo-box.component';



@NgModule({
  declarations: [MyNgLibComponent, ComboBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MyNgLibComponent, ComboBoxComponent]
})
export class MyNgLibModule { }
