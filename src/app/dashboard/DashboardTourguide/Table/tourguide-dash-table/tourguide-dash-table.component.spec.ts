import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideDashTableComponent } from './tourguide-dash-table.component';

describe('TourguideDashTableComponent', () => {
  let component: TourguideDashTableComponent;
  let fixture: ComponentFixture<TourguideDashTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourguideDashTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourguideDashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
