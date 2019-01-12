import { Injectable } from '@angular/core';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private test_json;

  constructor(private itemService: ItemService) {
    this.test_json = {
      items: [
      this.itemService.createItem(1, 'test', 123, '11-01-2019', true, false),
      this.itemService.createItem(2, 'test', 123, '11-01-2019', true, false),
      this.itemService.createItem(3, 'test', 123, '11-01-2019', true, false)
    ]};
  }

  getTestJson() {
    return this.test_json;
  }
}
