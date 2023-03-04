import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncredibleCounterComponent } from './incredible-counter.component';

describe('IncredibleCounterComponent', () => {
  let component: IncredibleCounterComponent;
  let fixture: ComponentFixture<IncredibleCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncredibleCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncredibleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
