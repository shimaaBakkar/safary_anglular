import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripComponent } from './all-trip.component';

describe('AllTripComponent', () => {
  let component: AllTripComponent;
  let fixture: ComponentFixture<AllTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
