import { TestBed, inject } from '@angular/core/testing';

import { NxMenuService } from './nx-menu.service';

describe('NxMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NxMenuService]
    });
  });

  it('should ...', inject([NxMenuService], (service: NxMenuService) => {
    expect(service).toBeTruthy();
  }));
});
