import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { CustomTourgideComponent } from './customize-trip/custom-tourgide/custom-tourgide.component';
import { CustomTripDetailsComponent } from './customize-trip/custom-trip-details/custom-trip-details.component';
import { PlaceComponent } from './customize-trip/custom_place/place.component';
import { HotelComponent } from './customize-trip/custo_hotel/hotel.component';
import { AllHotelsComponent } from './hotels/all-hotels/all-hotels.component';
import { RoomComponent } from './hotels/room/room.component';
import { UserRegComponent } from './register/user-reg/user-reg.component';
import { FooterComponent } from './temp/footer/footer.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule) },
  { path: 'customize/hotel', component: HotelComponent },
  { path: 'customize/place', component: PlaceComponent },
  { path: 'customize/tourgide', component: CustomTourgideComponent },
  { path: 'customize/trip', component: CustomTripDetailsComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
  { path: 'AllTrip', loadChildren: () => import('./all-trip/all-trip.module').then(m => m.AllTripModule) },
  { path: 'Vehcile', loadChildren: () => import('./vehcile/vehcile.module').then(m => m.VehcileModule) },
  { path: 'Tourguide', loadChildren: () => import('./tourguide/tourguide.module').then(m => m.TourguideModule) },
  {
    path: 'customize_trip',
    loadChildren: () => import('./customize-trip/customize-trip.module').then(m => m.CustomizeTripModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
  },
  { path: 'hotels/room', component: RoomComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  // { path: 'hotels', component: AllHotelsComponent },
  {path: 'user-reg', component: UserRegComponent},
  { path: "**", component: FooterComponent },//can make a notfound component!
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
