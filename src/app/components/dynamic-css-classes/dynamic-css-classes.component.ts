import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-css-classes',
  templateUrl: './dynamic-css-classes.component.html',
  styleUrls: ['./dynamic-css-classes.component.css']
})
export class DynamicCssClassesComponent implements OnInit {
  isAlert = false;
  color = 'black';
  constructor() { }

  ngOnInit() {
  }

}
