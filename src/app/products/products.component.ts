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
  filteredProducts: Products[] = [];

  constructor(private activetedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Products[]>("../../assets/datas/products.json").subscribe(data => {
      this.products = data;

      this.activetedRoute.paramMap.subscribe(params => {
        if (params.get("url") === null) {
          

          this.filteredProducts = this.getMeRandomElements(this.products, 3);
          return;
        }
        this.categorySeoUrl = params.get("url");
        this.filteredProducts = this.products.filter(p => { return p.categorySeoUrl == this.categorySeoUrl })
      })
    });
  }


  getMeRandomElements(sourceArray:Products[], neededElements) {
    let result :Products[]=[];

    for (var i = 0; i < neededElements; i++) {
      var p =sourceArray[Math.floor(Math.random() * sourceArray.length)];
      

      var exists = result.find(r=>r == p);
       if(exists){ i--; continue;}
       else{
       result.push(p);
      }


      // if (i != 0) {
      //   for (var j = 0; j < i; j++) {
      //     if(result[j]===result[i]){
      //       result.splice(j,1);
      //       i--;
      //     }
      //   }
      // }
    }
    return result;
  }
}
