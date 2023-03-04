import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveOfferComponent } from './exclusive-offer.component';

describe('ExclusiveOfferComponent', () => {
  let component: ExclusiveOfferComponent;
  let fixture: ComponentFixture<ExclusiveOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusiveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
