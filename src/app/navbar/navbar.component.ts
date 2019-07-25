import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { cartProduct } from '../models/cartProduct';
import { Products } from '../models/products';
import { Observable } from 'rxjs';

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
  constructor(private cartService: CartService, private wishService: WishService) {

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
}
