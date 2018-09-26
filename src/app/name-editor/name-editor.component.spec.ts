import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditorComponent } from './name-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ZippyComponent} from '../zippy/zippy.component';
import {AsyncObservableComponent} from '../async-observable/async-observable.component';

describe('NameEditorComponent', () => {
  let component: NameEditorComponent;
  let fixture: ComponentFixture<NameEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameEditorComponent, ZippyComponent, AsyncObservableComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
