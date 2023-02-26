import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTripDetailsComponent } from './custom-trip-details.component';

describe('CustomTripDetailsComponent', () => {
  let component: CustomTripDetailsComponent;
  let fixture: ComponentFixture<CustomTripDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTripDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
