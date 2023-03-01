import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDesplacesComponent } from './about-desplaces.component';

describe('AboutDesplacesComponent', () => {
  let component: AboutDesplacesComponent;
  let fixture: ComponentFixture<AboutDesplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDesplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDesplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
