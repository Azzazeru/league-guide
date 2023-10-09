import { TestBed } from '@angular/core/testing';

import { MonstruoJgServiceService } from './monstruo-jg-service.service';

describe('MonstruoJgServiceService', () => {
  let service: MonstruoJgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstruoJgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
