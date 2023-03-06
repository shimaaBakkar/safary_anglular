import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcilesComponent } from './vehciles.component';

describe('VehcilesComponent', () => {
  let component: VehcilesComponent;
  let fixture: ComponentFixture<VehcilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
