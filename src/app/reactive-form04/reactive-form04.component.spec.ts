import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm04Component } from './reactive-form04.component';

describe('ReactiveForm04Component', () => {
  let component: ReactiveForm04Component;
  let fixture: ComponentFixture<ReactiveForm04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
