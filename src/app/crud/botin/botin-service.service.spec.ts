import { TestBed } from '@angular/core/testing';

import { BotinServiceService } from './botin-service.service';

describe('BotinServiceService', () => {
  let service: BotinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
