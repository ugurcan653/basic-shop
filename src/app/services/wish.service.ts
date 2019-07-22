import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  wishProducts: Products[] = [];
  wishProduct: Products;

  constructor() { }

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
      console.log(this.wishProduct)
      this.wishProducts.push(this.wishProduct);
    }
  }
  getWishCount() {
    return this.wishProducts.length;
  }
}
