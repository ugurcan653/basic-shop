import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() title: any;//center ve products componentlerine aynı içeriği farklı yazılarla yollayabilmek için burada input oluşturduk
  @Input() products: Products[];//center ve products componentlerine aynı içeriği farklı verilerle yollayabilmek için burada input oluşturduk

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    if (this.title != undefined)
      return;
    
    this.route.data.subscribe(d => {
      this.title = d.title
    })
  }
 
}
