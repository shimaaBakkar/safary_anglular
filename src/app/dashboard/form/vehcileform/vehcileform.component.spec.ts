import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcileformComponent } from './vehcileform.component';

describe('VehcileformComponent', () => {
  let component: VehcileformComponent;
  let fixture: ComponentFixture<VehcileformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcileformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcileformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
