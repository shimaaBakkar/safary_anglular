import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerDashTableComponent } from './hotel-owner-dash-table.component';

describe('HotelOwnerDashTableComponent', () => {
  let component: HotelOwnerDashTableComponent;
  let fixture: ComponentFixture<HotelOwnerDashTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerDashTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerDashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
