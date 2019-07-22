import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { cartProduct } from '../models/cartProduct';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartSize: number;
  wishSize: number;
  products: cartProduct[]=[];
  constructor(private cartService: CartService,private wishService: WishService) { }

  ngOnInit() {
    //this.products=this.cartService.getCart()s
  }

  ngDoCheck(): void {
    this.cartSize = this.cartService.getCartCount()
    this.wishSize = this.wishService.getWishCount();
  }
}
