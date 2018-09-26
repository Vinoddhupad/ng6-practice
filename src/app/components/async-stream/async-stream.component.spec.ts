import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsyncStreamComponent} from './async-stream.component';
import {Observable, Subject} from 'rxjs';
import {By} from '@angular/platform-browser';

describe('AsyncStreamComponent', () => {
  let component: AsyncStreamComponent;
  let fixture: ComponentFixture<AsyncStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncStreamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for async value', async(() => {
    const stream = new Subject<string>();

    component.personName = stream.asObservable();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('');

    stream.next('Hello');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toBe('Hello');
  }));
});
