import { Injectable } from '@angular/core';

import { IItemsService, AItemsService} from 'my-ng-lib';

import { IPays } from '../modeles/interfaces/IPays';

import { Pays } from '../modeles/Pays';


@Injectable({
  providedIn: 'root'
})
export class PaysService extends AItemsService<IPays> implements IItemsService<IPays> {

  getListe(): Array<IPays> {
    return([
      new Pays('4', 'France', 66000000),
      new Pays('3', 'Belgique'),
      new Pays('1', 'Suisse'),
      new Pays('7', 'Islande'),
      new Pays('9', 'Allemagne')

    ]);
  }



}
