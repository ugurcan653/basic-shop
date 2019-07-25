import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getItem(name: string): any {
    return JSON.parse(localStorage.getItem(name));
  }


}