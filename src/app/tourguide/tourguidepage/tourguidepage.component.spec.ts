import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguidepageComponent } from './tourguidepage.component';

describe('TourguidepageComponent', () => {
  let component: TourguidepageComponent;
  let fixture: ComponentFixture<TourguidepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourguidepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourguidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
