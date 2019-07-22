import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Observable, of } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: cartProduct[] = [];
  cartProduct: cartProduct;

  constructor() { }
  
  getCart(): Observable<cartProduct[]> {
    return of(this.cartProducts);
  }

  getCartCount(){
    let count = 0;
     this.cartProducts.forEach(function(cp,i){
      count+= cp.count;
    })
    return count;
  }

  addToCart(product: Products) {
    this.cartProduct = this.cartProducts.find(cp => {
      return cp.product == product;
    })

    if (this.cartProduct) {
      this.cartProduct.count++;
    }
    else {
      this.cartProduct = new cartProduct(product, 1);
      this.cartProducts.push(this.cartProduct);
    }
  }
}
