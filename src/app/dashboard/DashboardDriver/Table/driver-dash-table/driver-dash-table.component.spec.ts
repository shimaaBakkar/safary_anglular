import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDashTableComponent } from './driver-dash-table.component';

describe('DriverDashTableComponent', () => {
  let component: DriverDashTableComponent;
  let fixture: ComponentFixture<DriverDashTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDashTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
