import { TestBed } from '@angular/core/testing';

import { RunaServiceService } from './runa-service.service';

describe('RunaServiceService', () => {
  let service: RunaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
