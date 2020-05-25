import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm05ValidComponent } from './reactive-form05-valid.component';

describe('ReactiveForm05ValidComponent', () => {
  let component: ReactiveForm05ValidComponent;
  let fixture: ComponentFixture<ReactiveForm05ValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm05ValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm05ValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
