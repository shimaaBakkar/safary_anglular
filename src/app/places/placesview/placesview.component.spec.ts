import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesviewComponent } from './placesview.component';

describe('PlacesviewComponent', () => {
  let component: PlacesviewComponent;
  let fixture: ComponentFixture<PlacesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
