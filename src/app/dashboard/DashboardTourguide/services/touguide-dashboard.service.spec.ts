import { TestBed } from '@angular/core/testing';

import { TouguideDashboardService } from './touguide-dashboard.service';

describe('TouguideDashboardService', () => {
  let service: TouguideDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouguideDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
