import { TestBed } from '@angular/core/testing';

import { ModoServiceService } from './modo-service.service';

describe('ModoServiceService', () => {
  let service: ModoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
