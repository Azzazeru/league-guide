import { TestBed } from '@angular/core/testing';

import { HabilidadCampeonServiceService } from './habilidad-campeon-service.service';

describe('HabilidadCampeonServiceService', () => {
  let service: HabilidadCampeonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadCampeonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
