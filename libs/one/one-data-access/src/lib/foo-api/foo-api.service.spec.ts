import { TestBed } from '@angular/core/testing';

import { FooApiService } from './foo-api-service';

describe('FooApiService', () => {
  let service: FooApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
