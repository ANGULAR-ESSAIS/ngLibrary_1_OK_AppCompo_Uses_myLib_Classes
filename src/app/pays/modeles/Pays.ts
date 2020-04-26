import { Item } from 'my-ng-lib';
import { IPays } from './interfaces/IPays';

export class Pays extends Item implements IPays {
  constructor(psId: string, psLabel: string, private iNbHabitants: number = 0) {
    super(psId, psLabel);
  }
  getNbHabitants(): number {
    return(this.iNbHabitants);
  }
}
