import { TestBed } from '@angular/core/testing';

import { BazApiService } from './baz-api.service';

describe('BazApiService', () => {
  let service: BazApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
