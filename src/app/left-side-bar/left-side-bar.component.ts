import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClientModule, HttpClient } from '@angular/common/http';//veri çekmemizi sağlayan namespace
// let data = require('../datas/categories.json');



@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  categories: Categories[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Categories[]>("../../assets/datas/categories.json").subscribe(data => {
      this.categories = data;

    });
  }

}
