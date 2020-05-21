import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm02Component } from './reactive-form02.component';

describe('ReactiveForm02Component', () => {
  let component: ReactiveForm02Component;
  let fixture: ComponentFixture<ReactiveForm02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
