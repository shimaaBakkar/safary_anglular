import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplacescardComponent } from './allplacescard.component';

describe('AllplacescardComponent', () => {
  let component: AllplacescardComponent;
  let fixture: ComponentFixture<AllplacescardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllplacescardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllplacescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
