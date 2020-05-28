import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm06ValidComponent } from './reactive-form06-valid.component';

describe('ReactiveForm06ValidComponent', () => {
  let component: ReactiveForm06ValidComponent;
  let fixture: ComponentFixture<ReactiveForm06ValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm06ValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm06ValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
