import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTourgideComponent } from './customize-trip/custom-tourgide/custom-tourgide.component';
import { CustomTripDetailsComponent } from './customize-trip/custom-trip-details/custom-trip-details.component';
import { PlaceComponent } from './customize-trip/custom_place/place.component';
import { HotelComponent } from './customize-trip/custo_hotel/hotel.component';

const routes: Routes = [
  {path: 'customize_trip', component: CustomTripDetailsComponent},
  {path: 'custo_hotel', component: HotelComponent },
  {path: 'custom_place', component: PlaceComponent},
  {path: 'custom-tourgide', component: CustomTourgideComponent },
  {path: 'custom-trip-details', component: CustomTripDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
