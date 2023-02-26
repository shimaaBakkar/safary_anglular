import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './custo_hotel/hotel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PlaceComponent } from './custom_place/place.component';
import { CustomTourgideComponent } from './custom-tourgide/custom-tourgide.component';
import { CustomTripDetailsComponent } from './custom-trip-details/custom-trip-details.component';



@NgModule({
  declarations: [
    HotelComponent,
    PaginationComponent,
    PlaceComponent,
    CustomTourgideComponent,
    CustomTripDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomizeTripModule { }
