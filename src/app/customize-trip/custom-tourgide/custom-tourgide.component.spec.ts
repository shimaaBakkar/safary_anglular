import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTourgideComponent } from './custom-tourgide.component';

describe('CustomTourgideComponent', () => {
  let component: CustomTourgideComponent;
  let fixture: ComponentFixture<CustomTourgideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTourgideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTourgideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
