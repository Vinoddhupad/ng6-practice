import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `{{message}}`,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() message: string;
  ngOnInit() {
  }


}
