import { TestBed } from '@angular/core/testing';

import { BaratijaVisionServiceService } from './baratija-vision-service.service';

describe('BaratijaVisionServiceService', () => {
  let service: BaratijaVisionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaratijaVisionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
