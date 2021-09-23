import { Component, OnInit } from '@angular/core';
//import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  
]
})
export class HomeComponent implements OnInit {
isCollapsed : boolean = true;
isCollapsed0 : boolean = true;
isCollapsed1 : boolean = true;
isCollapsed2 : boolean = true;
isCollapsed3 : boolean = true;
  constructor() { }
toggleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}
atoggleCollapse(){
  this.isCollapsed0 = !this.isCollapsed0;
}
btoggleCollapse(){
  this.isCollapsed1 = this.isCollapsed1;
}
ctoggleCollapse(){
  this.isCollapsed2 = this.isCollapsed2;
}
dtoggleCollapse(){
  this.isCollapsed3 = this.isCollapsed3;
}
  ngOnInit() {
   
  }
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
}


 