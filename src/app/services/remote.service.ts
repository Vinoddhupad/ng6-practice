import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient) {
  }

  fetchViaHttp(): Observable<any> {
    return this.http.get('/someendpoint/people.json');
  }

  throwingError() {
    throw new Error('Custom error thrown');
  }
}
