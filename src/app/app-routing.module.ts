import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CustomTourgideComponent } from './customize-trip/custom-tourgide/custom-tourgide.component';
// import { CustomTripDetailsComponent } from './customize-trip/custom-trip-details/custom-trip-details.component';
// import { PlaceComponent } from './customize-trip/custom_place/place.component';
// import { HotelComponent } from './customize-trip/custo_hotel/hotel.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./customize-trip/customize-trip.module').then(m => m.CustomizeTripModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
