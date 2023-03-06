import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesformComponent } from './placesform.component';

describe('PlacesformComponent', () => {
  let component: PlacesformComponent;
  let fixture: ComponentFixture<PlacesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
