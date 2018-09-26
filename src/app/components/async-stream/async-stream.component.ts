import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-async-stream',
  templateUrl: './async-stream.component.html',
  styleUrls: ['./async-stream.component.css']
})
export class AsyncStreamComponent implements OnInit {

  personName: Observable<string>;
  constructor() { }

  ngOnInit() {
  }

}
