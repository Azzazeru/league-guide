import { TestBed } from '@angular/core/testing';

import { HechizoServiceService } from './hechizo-service.service';

describe('HechizoServiceService', () => {
  let service: HechizoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HechizoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
