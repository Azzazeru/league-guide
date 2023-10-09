import { TestBed } from '@angular/core/testing';

import { CampeonServiceService } from './campeon-service.service';

describe('CampeonServiceService', () => {
  let service: CampeonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
