import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() title: any;//center ve products componentlerine aynı içeriği farklı yazılarla yollayabilmek için burada input oluşturduk
  @Input() products: Products[];//center ve products componentlerine aynı içeriği farklı verilerle yollayabilmek için burada input oluşturduk
  constructor(private route: ActivatedRoute, private cartService:CartService,private wishService:WishService) {
  }
  ngOnInit() {
    if (this.title != undefined)
      return;
    
    this.route.data.subscribe(d => {
      this.title = d.title
    })
  }
  addToCart(product:Products){
    this.cartService.addToCart(product)
  }
  addToWish(event,product:Products){
    this.wishService.addToWish(product);
    event.preventDefault();
  }
 
}
