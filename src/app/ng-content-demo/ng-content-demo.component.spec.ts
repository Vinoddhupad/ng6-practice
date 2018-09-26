import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentDemoComponent } from './ng-content-demo.component';
import {CounterComponent} from '../components/counter/counter.component';
import {WrapperComponent} from '../wrapper/wrapper.component';

describe('NgContentDemoComponent', () => {
  let component: NgContentDemoComponent;
  let fixture: ComponentFixture<NgContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentDemoComponent, CounterComponent, WrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
