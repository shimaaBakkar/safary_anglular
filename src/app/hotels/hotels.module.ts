import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHotelsComponent } from './all-hotels/all-hotels.component';
import { RoomComponent } from './room/room.component';
// import { HotelRoutingModule } from './hotel-routing.module';
import { RegBookingHotelComponent } from './all-hotels/reg-booking-hotel/reg-booking-hotel.component';
import { RoomGalleryComponent } from './all-hotels/room-gallery/room-gallery.component';
import { IncredibleSectionComponent } from './all-hotels/incredible-section/incredible-section.component';
import { IncredibleCounterComponent } from './all-hotels/incredible-counter/incredible-counter.component';
import { ExclusiveOfferComponent } from './all-hotels/exclusive-offer/exclusive-offer.component';
import { HotelsCardComponent } from './all-hotels/hotels-card/hotels-card.component';
import { RoomCardComponent } from './room/room-card/room-card.component';
import { RouterEvent, Routes, RouterModule } from '@angular/router';
// import { AllHotelsComponent } from './all-hotels/all-hotels.component';


const routes: Routes = [
  { path: "", component: AllHotelsComponent, },
  // {path: "room", component: RoomComponent}
  { path: 'room', component: RoomComponent }



];

@NgModule({
  declarations: [
    AllHotelsComponent,
    RoomComponent,
    RegBookingHotelComponent,
    RoomGalleryComponent,
    IncredibleSectionComponent,
    IncredibleCounterComponent,
    ExclusiveOfferComponent,
    HotelsCardComponent,
    RoomCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
  ],
  exports:[RouterModule]
})
export class HotelsModule { }
