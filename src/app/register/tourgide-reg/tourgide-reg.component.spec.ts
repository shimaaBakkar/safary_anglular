import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourgideRegComponent } from './tourgide-reg.component';

describe('TourgideRegComponent', () => {
  let component: TourgideRegComponent;
  let fixture: ComponentFixture<TourgideRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourgideRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourgideRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
