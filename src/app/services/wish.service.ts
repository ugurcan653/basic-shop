import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Products } from '../models/products';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  wishProducts: Products[] = [];
  wishProduct: Products;
  private wishProductsSubject = new BehaviorSubject<Products[]>([]);

  constructor(private localstorageservice:LocalStorageService) 
  { 
    this.initialize();
  }
  initialize() {
    let storageData =  this.localstorageservice.getItem("Wish");
    if(!storageData) return;
    this.wishProducts = storageData;
    this.wishProductsSubject.next(this.wishProducts);
   }


  getWish(): Observable<Products[]> {
    return this.wishProductsSubject.asObservable();//burayı dinliyor
    // return of(this.wishProducts);
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
    this.wishProductsSubject.next(this.wishProducts);
    this.localstorageservice.setItem("Wish",this.wishProducts);
  }
  removeWishProduct(wishProduct: Products) {
    this.wishProducts = this.wishProducts.filter(cp => {
      return cp.productId != wishProduct.productId;
    });
    this.wishProductsSubject.next(this.wishProducts);
    this.localstorageservice.setItem('Wish', this.wishProducts);
  }
  getWishCount() {
    return this.wishProducts.length;
  }
}
