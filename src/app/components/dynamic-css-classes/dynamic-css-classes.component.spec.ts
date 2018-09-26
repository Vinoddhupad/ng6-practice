import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicCssClassesComponent} from './dynamic-css-classes.component';
import {By} from '@angular/platform-browser';

describe('DynamicCssClassesComponent', () => {
  let component: DynamicCssClassesComponent;
  let fixture: ComponentFixture<DynamicCssClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCssClassesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class alert, If isAlert value is true', () => {
    component.isAlert = true;
    const divElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
    expect(divElement.classes.alert).toBeTruthy();
    expect(divElement.classes.success).toBeFalsy();
  });

  it('should have class success, If isAlert value is false', () => {
    component.isAlert = false;
    const divElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
    expect(divElement.classes.success).toBeTruthy();
    expect(divElement.classes.alert).toBeFalsy();
  });

  it('should check for inline style', () => {
    const divElement = fixture.debugElement.query(By.css('div'));
    expect(divElement.nativeElement.style.backgroundColor).toBe('black');
  });
});
