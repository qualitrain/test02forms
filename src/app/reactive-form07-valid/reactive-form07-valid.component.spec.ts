import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm07ValidComponent } from './reactive-form07-valid.component';

describe('ReactiveForm07ValidComponent', () => {
  let component: ReactiveForm07ValidComponent;
  let fixture: ComponentFixture<ReactiveForm07ValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm07ValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm07ValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
