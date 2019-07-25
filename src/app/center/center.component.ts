import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';
import { WishService } from '../services/wish.service';
import { NotificationsService } from 'angular2-notifications';
import { cartProduct } from '../models/cartProduct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() title: any;//center ve products componentlerine aynı içeriği farklı yazılarla yollayabilmek için burada input oluşturduk
  @Input() products: Products[];//center ve products componentlerine aynı içeriği farklı verilerle yollayabilmek için burada input oluşturduk
  constructor(private route: ActivatedRoute, private cartService:CartService,private wishService:WishService,private notificationsService: NotificationsService,private http: HttpClient) {
  }
  ngOnInit() {
    if (this.title != undefined)
      return;
    
    this.route.data.subscribe(d => {
      this.title = d.title
    })
    this.http.get<Products[]>("../../assets/datas/products.json").subscribe(data => {
      this.products = data;
    });
  }
  addToCart(product:Products){
    this.notificationsService.success("success", product.productName + " added to cart!");
    this.cartService.addToCart(product)
  }
  addToWish(event,product:Products){
    this.notificationsService.success("success", product.productName + " added to wish list!");
    this.wishService.addToWish(product);
    event.preventDefault();
  }
}
