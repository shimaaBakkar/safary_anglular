import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGalleryComponent } from './room-gallery.component';

describe('RoomGalleryComponent', () => {
  let component: RoomGalleryComponent;
  let fixture: ComponentFixture<RoomGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
