import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplDriven04Component } from './form-templ-driven04.component';

describe('FormTemplDriven04Component', () => {
  let component: FormTemplDriven04Component;
  let fixture: ComponentFixture<FormTemplDriven04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplDriven04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplDriven04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
