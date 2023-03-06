import { TestBed } from '@angular/core/testing';

import { HotelOwnerDashboardService } from './hotel-owner-dashboard.service';

describe('HotelOwnerDashboardService', () => {
  let service: HotelOwnerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOwnerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
