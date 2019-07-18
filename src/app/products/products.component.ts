import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { Routes, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  categorySeoUrl: string;
  filteredProducts:Products[]=[];

  constructor(private activetedRoute: ActivatedRoute,private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Products[]>("../../assets/datas/products.json").subscribe(data => {
      this.products = data;

      this.activetedRoute.paramMap.subscribe(params => {
        this.categorySeoUrl = params.get("url");
        this.filteredProducts= this.products.filter(p=>{ return p.categorySeoUrl == this.categorySeoUrl })
      })
    });

  
  }

}
