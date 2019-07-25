import { Component, OnInit } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:cartProduct[]=[];


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(data => {
      this.cartProducts = data
    });
    return this.cartProducts
  }

}
