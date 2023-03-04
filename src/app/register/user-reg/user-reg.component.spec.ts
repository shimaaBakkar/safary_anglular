import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegComponent } from './user-reg.component';

import { ReactiveFormsModule } from '@angular/forms';


describe('UserRegComponent', () => {
  let component: UserRegComponent;
  let fixture: ComponentFixture<UserRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegComponent ],
      imports: [ReactiveFormsModule],  // Also add it to 'imports' array
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
