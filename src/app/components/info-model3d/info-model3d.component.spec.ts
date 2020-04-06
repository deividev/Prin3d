import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModel3dComponent } from './info-model3d.component';

describe('InfoModel3dComponent', () => {
  let component: InfoModel3dComponent;
  let fixture: ComponentFixture<InfoModel3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoModel3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoModel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
