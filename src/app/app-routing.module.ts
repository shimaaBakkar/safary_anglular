import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { CustomTourgideComponent } from './customize-trip/custom-tourgide/custom-tourgide.component';
import { CustomTripDetailsComponent } from './customize-trip/custom-trip-details/custom-trip-details.component';
import { PlaceComponent } from './customize-trip/custom_place/place.component';
import { HotelComponent } from './customize-trip/custo_hotel/hotel.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { SignupformComponent } from './dashboard/signupform/signupform.component';

import { FooterComponent } from './temp/footer/footer.component';
const routes: Routes = [


  { path: '' , loadChildren: ()  => import('./landingpage/landingpage.module').then(m => m.LandingpageModule) },
  // { path: 'customize_trip', component: CustomTripDetailsComponent},
  { path: 'customize/hotel', component: HotelComponent },
  { path: 'customize/place', component: PlaceComponent},
  { path: 'customize/tourgide', component: CustomTourgideComponent },
  { path: 'customize/trip', component: CustomTripDetailsComponent},
  { path: 'about', component: AboutusComponent},
  { path: 'places', loadChildren: () => import('./places/places.module').then(m => m.PlacesModule) },
  { path: 'AllTrip', loadChildren: () => import('./all-trip/all-trip.module').then(m => m.AllTripModule) },
  { path: 'Vehcile', loadChildren: () => import('./vehcile/vehcile.module').then(m => m.VehcileModule) },
  { path: 'Tourguide', loadChildren: () => import('./tourguide/tourguide.module').then(m => m.TourguideModule) },
  {
    path: 'customize_trip', 
    loadChildren: () => import('./customize-trip/customize-trip.module').then(m => m.CustomizeTripModule)
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },


  { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },


  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: "dashboard/signupform" ,component:SignupformComponent},
  {path: "dashboard/admin" ,component:AdminComponent},



  {path:"**",component:FooterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes ,{ enableTracing: true })],

  exports: [RouterModule]
})
export class AppRoutingModule { }

// {path: 'home',component:HomeComponent,
// children:[
// {  path: 'ourTrip',component : OurTripComponent },

// ]
//  },
