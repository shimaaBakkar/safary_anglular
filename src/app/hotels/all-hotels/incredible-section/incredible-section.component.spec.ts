import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncredibleSectionComponent } from './incredible-section.component';

describe('IncredibleSectionComponent', () => {
  let component: IncredibleSectionComponent;
  let fixture: ComponentFixture<IncredibleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncredibleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncredibleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
