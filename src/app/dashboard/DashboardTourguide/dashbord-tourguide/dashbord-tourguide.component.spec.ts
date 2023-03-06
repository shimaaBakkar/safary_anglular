import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordTourguideComponent } from './dashbord-tourguide.component';

describe('DashbordTourguideComponent', () => {
  let component: DashbordTourguideComponent;
  let fixture: ComponentFixture<DashbordTourguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordTourguideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordTourguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
