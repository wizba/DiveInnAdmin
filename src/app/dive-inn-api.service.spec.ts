import { TestBed } from '@angular/core/testing';

import { DiveInnAPIService } from './dive-inn-api.service';

describe('DiveInnAPIService', () => {
  let service: DiveInnAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiveInnAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
