import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcilecardComponent } from './vehcilecard.component';

describe('VehcilecardComponent', () => {
  let component: VehcilecardComponent;
  let fixture: ComponentFixture<VehcilecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcilecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
