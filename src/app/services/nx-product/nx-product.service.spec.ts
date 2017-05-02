import { TestBed, inject } from '@angular/core/testing';

import { NxProductService } from './nx-product.service';

describe('NxProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NxProductService]
    });
  });

  it('should ...', inject([NxProductService], (service: NxProductService) => {
    expect(service).toBeTruthy();
  }));
});
