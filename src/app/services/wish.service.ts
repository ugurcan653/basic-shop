import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../models/products';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  wishProducts: Products[] = [];
  wishProduct: Products;

  constructor(private localstorageservice:LocalStorageService) 
  { 
    this.initialize();
  }
  initialize() {
    let storageData =  this.localstorageservice.getItem("Wish");
    if(!storageData) return;
    this.wishProducts = storageData;
   }


  getWish(): Observable<Products[]> {
    return of(this.wishProducts);
  }

  addToWish(product: Products) {
    this.wishProduct = this.wishProducts.find(cp => {
      return cp == product;
    })
    if (this.wishProduct) {

    }
    else {
      this.wishProduct = product;
      this.wishProducts.push(this.wishProduct);
    }
    this.localstorageservice.setItem("Wish",this.wishProducts);
  }
  getWishCount() {
    return this.wishProducts.length;
  }
}
