import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerRegComponent } from './hotelOwner-reg.component';

describe('HotelOwnerRegComponent', () => {
  let component: HotelOwnerRegComponent;
  let fixture: ComponentFixture<HotelOwnerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
