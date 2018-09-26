import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicFormQuestionComponent} from './dynamic-form-question.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {QuestionBase} from '../model/question-base';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();
  const question = new QuestionBase<any>();



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
      providers: [
        // reference the new instance of formBuilder from above
        {provide: FormBuilder, useValue: formBuilder},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;

    // pass in the form dynamically
    component.form = formBuilder.group({
      type: question.key,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
