import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  checkItemExists(key: string): boolean {
    if (localStorage.getItem(key) !== null) {
      return true;
    } else {
      return false;
    }
  }

  getItem (key: string) {
    return localStorage.getItem(key);
  }

  deleteItem (key: string) {
    localStorage.removeItem(key);
  }
}
