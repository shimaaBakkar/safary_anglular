import { TestBed } from '@angular/core/testing';

import { TourguideService } from './tourguide.service';

describe('TourguideService', () => {
  let service: TourguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourguideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
