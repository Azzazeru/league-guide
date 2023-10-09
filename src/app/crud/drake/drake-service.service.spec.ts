import { TestBed } from '@angular/core/testing';

import { DrakeServiceService } from './drake-service.service';

describe('DrakeServiceService', () => {
  let service: DrakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
