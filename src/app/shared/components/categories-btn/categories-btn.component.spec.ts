import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBtnComponent } from './categories-btn.component';

describe('CategoriesBtnComponent', () => {
  let component: CategoriesBtnComponent;
  let fixture: ComponentFixture<CategoriesBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
