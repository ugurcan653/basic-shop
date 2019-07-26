import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Observable, of,Subject, BehaviorSubject } from 'rxjs';
import { Products } from '../models/products';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: cartProduct[] = [];
  cartProduct: cartProduct;

  private subject  = new BehaviorSubject<cartProduct[]>([]);
  constructor(private localstorageservice: LocalStorageService) {
    this.initialize();
  }

  initialize() {
    let storageData = this.localstorageservice.getItem("Cart");
    if (!storageData) return;
    // this.cartProducts = storageData;
    this.subject.next(storageData);
  }

  getCart(): Observable<cartProduct[]> {
    // return of(this.cartProducts);
    return this.subject.asObservable();
  }

  getCartCount() {
    let count = 0;
    this.subject.subscribe(s=>{
      s.forEach((cp)=>{
        count+=cp.count
      })
    })
    return count;
  }

  addToCart(product: Products) {
    this.cartProduct = this.cartProducts.find(cp => {
      return cp.product.productId === product.productId;
    })
    if (this.cartProduct) {
      this.cartProduct.count++;
    }
    else {
      this.cartProduct = new cartProduct(product, 1);
      this.cartProducts.push(this.cartProduct);
    }
    this.localstorageservice.setItem("Cart", this.cartProducts);
  }
  decreaseCartProduct(cartProduct: cartProduct) {
    cartProduct.count--;
    if (cartProduct.count == 0) {
      this.cartProducts = this.cartProducts.filter(cp => {
        return cp != cartProduct
      });
    }
    this.localstorageservice.setItem('Cart', this.cartProducts);
  }

  removeCartProduct(cartProduct: cartProduct) {
    this.subject.next( this.cartProducts.filter(cp => {
       cp.product.productId != cartProduct.product.productId;
    }));
    
    this.localstorageservice.setItem('Cart', this.cartProducts);
  }

  clearCart(): void {
    this.cartProducts = [];
  }
}
