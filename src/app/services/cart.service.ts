import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Products } from '../models/products';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: cartProduct[] = [];
  cartProduct: cartProduct;

  private cartProductsSubject = new BehaviorSubject<cartProduct[]>([]);

  constructor(private localstorageservice: LocalStorageService) {
    this.initialize();
  }

  initialize() {
    let storageData = this.localstorageservice.getItem("Cart");
    if (!storageData) return;
    this.cartProducts = storageData;
    this.cartProductsSubject.next(this.cartProducts);
  }

  getCart(): Observable<cartProduct[]> {
    return this.cartProductsSubject.asObservable();//burayı dinliyor

    // return of(this.cartProducts);
  }

  getCartCount() {
    let count = 0;
    this.cartProducts.forEach(function (cp, i) {
      count += cp.count;
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
    this.cartProductsSubject.next(this.cartProducts);
    this.localstorageservice.setItem("Cart", this.cartProducts);
  }
  decreaseCartProduct(cartProduct: cartProduct) {
    cartProduct.count--;
    if (cartProduct.count == 0) {
      this.cartProducts = this.cartProducts.filter(cp => {
        return cp != cartProduct
      });
    }
    this.cartProductsSubject.next(this.cartProducts);
    this.localstorageservice.setItem('Cart', this.cartProducts);
  }

  removeCartProduct(cartProduct: cartProduct) {
    this.cartProducts = this.cartProducts.filter(cp => {
      return cp.product.productId != cartProduct.product.productId;
    });
    this.cartProductsSubject.next(this.cartProducts);
    this.localstorageservice.setItem('Cart', this.cartProducts);
  }

  clearCart(): void {
    this.cartProducts = [];
  }
}
