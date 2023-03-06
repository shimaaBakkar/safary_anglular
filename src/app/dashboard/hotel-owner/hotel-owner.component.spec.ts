import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerComponent } from './hotel-owner.component';

describe('HotelOwnerComponent', () => {
  let component: HotelOwnerComponent;
  let fixture: ComponentFixture<HotelOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
