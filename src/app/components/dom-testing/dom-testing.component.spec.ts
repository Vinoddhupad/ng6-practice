import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DomTestingComponent} from './dom-testing.component';
import {By} from '@angular/platform-browser';

describe('DomTestingComponent', () => {
  let component: DomTestingComponent;
  let fixture: ComponentFixture<DomTestingComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DomTestingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have dom element if isVisible is false', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeNull();
  });

  it('should contain dom element if isVisible is true', () => {
    component.isVisible = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const containerElement = fixture.debugElement.query(By.css('.container'));
      expect(containerElement).not.toBeNull();
    });
  });

  it('clicking the button should toggle visibility', () => {
    const button = fixture.debugElement.query(By.css('.btn'));
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  });
});
