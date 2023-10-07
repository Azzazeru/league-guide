import { TestBed } from '@angular/core/testing';

import { SkinCampeonServiceService } from './skin-campeon-service.service';

describe('SkinCampeonServiceService', () => {
  let service: SkinCampeonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkinCampeonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
