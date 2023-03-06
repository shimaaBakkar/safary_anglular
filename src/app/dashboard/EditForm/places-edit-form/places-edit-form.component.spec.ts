import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesEditFormComponent } from './places-edit-form.component';

describe('PlacesEditFormComponent', () => {
  let component: PlacesEditFormComponent;
  let fixture: ComponentFixture<PlacesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
