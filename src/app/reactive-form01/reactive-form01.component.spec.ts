import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm01Component } from './reactive-form01.component';

describe('ReactiveForm01Component', () => {
  let component: ReactiveForm01Component;
  let fixture: ComponentFixture<ReactiveForm01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
