import { IItem } from './../../modeles/interfaces/IItem';

export interface IItemsService<T extends IItem> {
  getListe(): Array<T>;
  getById(psId: string): T;
}
