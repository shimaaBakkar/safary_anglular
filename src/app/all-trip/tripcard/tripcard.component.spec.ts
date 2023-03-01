import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripcardComponent } from './tripcard.component';

describe('TripcardComponent', () => {
  let component: TripcardComponent;
  let fixture: ComponentFixture<TripcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
