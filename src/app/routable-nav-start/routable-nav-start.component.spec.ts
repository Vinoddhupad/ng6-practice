import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutableNavStartComponent } from './routable-nav-start.component';

describe('RoutableNavStartComponent', () => {
  let component: RoutableNavStartComponent;
  let fixture: ComponentFixture<RoutableNavStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutableNavStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutableNavStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
