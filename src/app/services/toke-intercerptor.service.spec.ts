import { TestBed } from '@angular/core/testing';

import { TokeIntercerptorService } from './toke-intercerptor.service';

describe('TokeIntercerptorService', () => {
  let service: TokeIntercerptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeIntercerptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
