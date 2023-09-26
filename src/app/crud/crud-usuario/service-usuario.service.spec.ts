import { TestBed } from '@angular/core/testing';

import { ProductServiceService  } from './service-usuario.service';

describe('ServiceUsuarioService', () => {
  let service: ProductServiceService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
