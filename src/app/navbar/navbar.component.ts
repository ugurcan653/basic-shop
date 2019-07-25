import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { cartProduct } from '../models/cartProduct';
import { Products } from '../models/products';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartSize: number;
  wishSize: number;
  cartProducts: cartProduct[] = [];
  wishProducts: Products[] = [];
  constructor(private cartService: CartService, private wishService: WishService, private localStorageService: LocalStorageService) {

  }

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.cartProducts = data
    });
    this.wishService.getWish().subscribe(data => {
      this.wishProducts = data
    });

  }

  ngDoCheck(): void {
    this.cartSize = this.cartService.getCartCount()
    this.wishSize = this.wishService.getWishCount();
  }
  removeWish(deleteproduct){
    console.log(deleteproduct);
    this.wishProducts = this.wishProducts.filter(product => product!= deleteproduct);
    this.localStorageService.setItem('Wish',this.wishProducts);
    
  }
  removeCart(deleteproduct){
    this.cartProducts = this.cartProducts.filter(product => product!= deleteproduct);
    this.localStorageService.setItem('Cart',this.cartProducts); 
  }
}
