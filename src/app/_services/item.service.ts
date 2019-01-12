import { Injectable } from '@angular/core';
import { ItemInterface } from '../_interfaces/item.interface';
import { Item } from '../_models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  createItem (
    Id: number,
    Name: string,
    Amount: number,
    Date: string,
    In_Out: boolean,
    Repeating: boolean,
  ): ItemInterface {

    const item = new Item();

    item.Id = Id;
    item.Name = Name;
    item.Amount = Amount;
    item.Date = Date;
    item.In_Out = In_Out;
    item.Repeating = Repeating;

    return item;
  }

  getItem (id: number): ItemInterface {
    return new Item();
  }

  editItem (item: ItemInterface): boolean {
    return true;
  }

  deleteItem (): boolean {
    return true;
  }
}
