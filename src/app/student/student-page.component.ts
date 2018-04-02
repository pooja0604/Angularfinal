import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class StudentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
