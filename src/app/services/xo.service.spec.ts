import { TestBed } from '@angular/core/testing';

import { XOService } from './xo.service';

describe('XOService', () => {
  let service: XOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
