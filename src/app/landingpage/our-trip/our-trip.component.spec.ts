import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTripComponent } from './our-trip.component';

describe('OurTripComponent', () => {
  let component: OurTripComponent;
  let fixture: ComponentFixture<OurTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
