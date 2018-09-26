import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() {
  }

  simpleAync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hi there');
      }, 100);
    });
  }
}
