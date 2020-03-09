import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadDetailsComponent } from './form-upload-details.component';

describe('FormUploadDetailsComponent', () => {
  let component: FormUploadDetailsComponent;
  let fixture: ComponentFixture<FormUploadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
