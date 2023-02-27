import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcilepageComponent } from './vehcilepage.component';

describe('VehcilepageComponent', () => {
  let component: VehcilepageComponent;
  let fixture: ComponentFixture<VehcilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehcilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehcilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
