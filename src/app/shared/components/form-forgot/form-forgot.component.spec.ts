import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForgotComponent } from './form-forgot.component';

describe('FormForgotComponent', () => {
  let component: FormForgotComponent;
  let fixture: ComponentFixture<FormForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
