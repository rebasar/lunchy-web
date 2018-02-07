import { TestBed, inject } from '@angular/core/testing';

import { LunchyBackendService } from './lunchy-backend.service';

describe('LunchyBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunchyBackendService]
    });
  });

  it('should be created', inject([LunchyBackendService], (service: LunchyBackendService) => {
    expect(service).toBeTruthy();
  }));
});
