import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">        
  <img src="assets/home.jpg" class="img-thumbnail" alt="Home Page" width="750" height="750"> 
</div>
  
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
