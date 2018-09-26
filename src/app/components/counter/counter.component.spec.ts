import {async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should increment current counter', fakeAsync(() => {
    component.ngOnInit();
    expect(component.currentCounter).toBe(0);
    tick(500);
    expect(component.currentCounter).toBe(0);
    tick(500);
    expect(component.currentCounter).toBe(1);

    discardPeriodicTasks();
  }));
});
