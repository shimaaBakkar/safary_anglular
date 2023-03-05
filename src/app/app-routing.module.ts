import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './about/aboutus/aboutus.component';

// customize_trip
import { CustomTripDetailsComponent } from './customize-trip/custom-trip-details/custom-trip-details.component';
import { CustomTourgideComponent } from './customize-trip/custom-tourgide/custom-tourgide.component';
import { PlaceComponent } from './customize-trip/custom_place/place.component'; //customize_place
import { HotelComponent } from './customize-trip/custo_hotel/hotel.component'; //customize_hotel

// hotels
import { AllHotelsComponent } from './hotels/all-hotels/all-hotels.component';
import { RoomComponent } from './hotels/room/room.component';

// register
import { UserRegComponent } from './register/user-reg/user-reg.component';
import { HotelOwnerRegComponent } from './register/hotelOwner-reg/hotelOwner-reg.component';

// import {RegisterRoutingModule} from './register/register-routing.module';


import { FooterComponent } from './temp/footer/footer.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule) },
  { path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
  { path: 'AllTrip', loadChildren: () => import('./all-trip/all-trip.module').then(m => m.AllTripModule) },
  { path: 'Vehcile', loadChildren: () => import('./vehcile/vehcile.module').then(m => m.VehcileModule) },
  { path: 'Tourguide', loadChildren: () => import('./tourguide/tourguide.module').then(m => m.TourguideModule) },

  // customize_trip
  { path: 'customize/hotel', component: HotelComponent },
  { path: 'customize/place', component: PlaceComponent },
  { path: 'customize/tourgide', component: CustomTourgideComponent },
  { path: 'customize/trip', component: CustomTripDetailsComponent },
  {
    path: 'customize_trip',
    loadChildren: () => import('./customize-trip/customize-trip.module').then(m => m.CustomizeTripModule)
  },

  // hotels
  { path: 'hotels', component: AllHotelsComponent },
  { path: 'hotels/room', component: RoomComponent },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
  },

  // about
  { path: 'about', component: AboutusComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

  // register
  { path: 'user-reg', component: UserRegComponent },
  { path: 'hotelOwner-reg', component: HotelOwnerRegComponent },
  // {path: 'register',
  // loadChildren: () => import('./register/register-routing.module').then(m => m.RegisterRoutingModule)
  // },

  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: "**", component: FooterComponent },//can make a notfound component!
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
