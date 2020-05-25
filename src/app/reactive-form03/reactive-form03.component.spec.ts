import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm03Component } from './reactive-form03.component';

describe('ReactiveForm03Component', () => {
  let component: ReactiveForm03Component;
  let fixture: ComponentFixture<ReactiveForm03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
