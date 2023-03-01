import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaaceDescComponent } from './plaace-desc.component';

describe('PlaaceDescComponent', () => {
  let component: PlaaceDescComponent;
  let fixture: ComponentFixture<PlaaceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaaceDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaaceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
