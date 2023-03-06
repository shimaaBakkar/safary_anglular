import { TestBed } from '@angular/core/testing';

import { DriverDashboardService } from './driver-dashboard.service';

describe('DriverDashboardService', () => {
  let service: DriverDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
