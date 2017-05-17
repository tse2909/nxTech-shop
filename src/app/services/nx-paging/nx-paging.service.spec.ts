import { TestBed, inject } from '@angular/core/testing';

import { NxPagingService } from './nx-paging.service';

describe('NxPagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NxPagingService]
    });
  });

  it('should ...', inject([NxPagingService], (service: NxPagingService) => {
    expect(service).toBeTruthy();
  }));
});
