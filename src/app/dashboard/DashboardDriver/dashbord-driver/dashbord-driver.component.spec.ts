import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordDriverComponent } from './dashbord-driver.component';

describe('DashbordDriverComponent', () => {
  let component: DashbordDriverComponent;
  let fixture: ComponentFixture<DashbordDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
