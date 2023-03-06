import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordHotelOwnwrComponent } from './dashbord-hotel-ownwr.component';

describe('DashbordHotelOwnwrComponent', () => {
  let component: DashbordHotelOwnwrComponent;
  let fixture: ComponentFixture<DashbordHotelOwnwrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordHotelOwnwrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordHotelOwnwrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
