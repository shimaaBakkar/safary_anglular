import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayproductComponent } from './payproduct.component';

describe('PayproductComponent', () => {
  let component: PayproductComponent;
  let fixture: ComponentFixture<PayproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
