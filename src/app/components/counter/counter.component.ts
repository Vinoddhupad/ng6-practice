import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  currentCounter = 0;
  maxCounter = 10;
  private counterInterval;

  constructor() {
  }

  ngOnInit() {
    this.setCounter();
  }

  setCounter() {
    this.counterInterval = setInterval(() => {
      if (this.currentCounter < this.maxCounter) {
        this.currentCounter++;
      } else {
        this.currentCounter = 0;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.counterInterval) {
      clearTimeout(this.counterInterval);
    }
  }
}
