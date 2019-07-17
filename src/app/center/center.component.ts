import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input() title: any;
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit() {
    if(this.title!=undefined)
    return;

this.route.data.subscribe(d=>{
  this.title=d.title
})
    
  }

}
