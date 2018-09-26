import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  doGreeting() {
    this.greet.emit('Hi!');
  }

}
