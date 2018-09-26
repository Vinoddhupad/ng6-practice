import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.css']
})
export class AsyncObservableComponent {

  constructor() {
  }
  time = new Observable((observer: any) => {
    setInterval(() => observer.next(new Date().toString()), 10000);
  });

}
