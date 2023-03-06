import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegBookingHotelComponent } from './reg-booking-hotel.component';

describe('RegBookingHotelComponent', () => {
  let component: RegBookingHotelComponent;
  let fixture: ComponentFixture<RegBookingHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegBookingHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegBookingHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
