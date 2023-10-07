import { TestBed } from '@angular/core/testing';

import { EscenciaServiceService } from './escencia-service.service';

describe('EscenciaServiceService', () => {
  let service: EscenciaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscenciaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
