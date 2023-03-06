import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { PlacesEditFormComponent } from './EditForm/places-edit-form/places-edit-form.component';
import { TripEditFormComponent } from './EditForm/trip-edit-form/trip-edit-form.component';
import { HotelformComponent } from './form/hotelform/hotelform.component';
import { PlacesformComponent } from './form/placesform/placesform.component';
import { TourguidelangformComponent } from './form/tourguidelangform/tourguidelangform.component';
import { TripformComponent } from './form/tripform/tripform.component';
import { VehcileformComponent } from './form/vehcileform/vehcileform.component';
import { HotelOwnerComponent } from './hotel-owner/hotel-owner.component';
import { SignupformComponent } from './signupform/signupform.component';
import { HotelsComponent } from './tables/hotels/hotels.component';
import { OrderdetailsComponent } from './tables/orderdetails/orderdetails.component';
import { PlacesComponent } from './tables/places/places.component';
import { RequestsComponent } from './tables/requests/requests.component';
import { TripsComponent } from './tables/trips/trips.component';
import { VehcilesComponent } from './tables/vehciles/vehciles.component';
import { TourguideComponent } from './tourguide/tourguide.component';



const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: "", redirectTo: "admin", pathMatch: "full" },
  
     // =================signup users in (dashbord Admin)  ===============
      {path: "admin" ,component:AdminComponent},
      {path: "signupform" ,component:SignupformComponent},
      {path: "signupforDriver" ,component:DriverComponent},
      {path: "signupforHotelOwner" ,component:HotelOwnerComponent},
      {path: "signupforTourguide" ,component:TourguideComponent},
      // ==============================================================
      // =================Table (dashbord Admin)  ===================
      {path: "VehcilesTable" ,component:VehcilesComponent},
      {path: "TripsTablet" ,component:TripsComponent},
      {path: "RequestsTable" ,component:RequestsComponent},
      {path: "PlacesTable" ,component:PlacesComponent},
      {path: "OrderdetailsTable" ,component:OrderdetailsComponent},
      {path: "HotelsTable" ,component:HotelsComponent},
      // ==============================================================

      // =====================forms require in dashboard===============
      {path: "VehcileformComponent" ,component:VehcileformComponent},
      {path: "HotelformComponent" ,component:HotelformComponent},
      {path: "PlacesformComponent" ,component:PlacesformComponent},
      {path: "TourguidelangformComponent" ,component:TourguidelangformComponent},
      {path: "TripformComponent" ,component:TripformComponent},
     

      // =====================Edit forms  in dashboard===============
      
      {path: "PlacesEditFormComponent" ,component:PlacesEditFormComponent},
      {path: "TripEditFormComponent" ,component:TripEditFormComponent},



      
   
    ]
  },


  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
