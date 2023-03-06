import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguidelangformComponent } from './tourguidelangform.component';

describe('TourguidelangformComponent', () => {
  let component: TourguidelangformComponent;
  let fixture: ComponentFixture<TourguidelangformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourguidelangformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourguidelangformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
