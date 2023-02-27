import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcileComponent } from './vehcile.component';

describe('VehcileComponent', () => {
  let component: VehcileComponent;
  let fixture: ComponentFixture<VehcileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
