import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WishService } from '../services/wish.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  products: Products[] = [];

  product:Products;
  
  constructor(private activetedRoute: ActivatedRoute,private http: HttpClient,private wishService:WishService,private cartService:CartService) {
  }
  
  ngOnInit() {
    this.http.get<Products[]>("../../assets/datas/products.json").subscribe(data => {
      // this.products = data;
      this.activetedRoute.paramMap.subscribe(params => {
        let seoUrl = params.get("url");
         this.product= data.find(p=>{ return p.seoUrl == seoUrl })
       })
    });
  }
  addToWish(product:Products){
    this.wishService.addToWish(product);
  }
  addToCart(product:Products){
    this.cartService.addToCart(product)
  }

}
