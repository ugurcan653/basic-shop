import { Component, OnInit } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { CartService } from '../services/cart.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: cartProduct[] = [];


  constructor(private cartService: CartService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.cartProducts = data
    });
  }

  sum(cartProduct:cartProduct){
    return cartProduct.product.price*cartProduct.count;
  }

  removeCartProduct(cartProduct: cartProduct) {
    this.cartService.removeCartProduct(cartProduct);
  }
  decreaseCartProduct(cartProduct: cartProduct) {
    this.cartService.decreaseCartProduct(cartProduct);
  }
  increaseCartProduct(cartProduct: cartProduct) {
    let product = cartProduct.product;
    this.cartService.addToCart(product)
  }

}
