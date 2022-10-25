import { TestBed } from '@angular/core/testing';

import { WasherApiService } from './washer-api.service';

describe('WasherApiService', () => {
  let service: WasherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
