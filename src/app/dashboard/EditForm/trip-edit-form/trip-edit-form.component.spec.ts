import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripEditFormComponent } from './trip-edit-form.component';

describe('TripEditFormComponent', () => {
  let component: TripEditFormComponent;
  let fixture: ComponentFixture<TripEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
