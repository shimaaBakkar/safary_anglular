import { TestBed } from '@angular/core/testing';

import { HotelownerService } from './hotelowner.service';

describe('HotelownerService', () => {
  let service: HotelownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
