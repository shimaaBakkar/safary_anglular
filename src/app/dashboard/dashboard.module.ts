import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupformComponent } from './signupform/signupform.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';
import { HotelOwnerComponent } from './hotel-owner/hotel-owner.component';
import { TourguideComponent } from './tourguide/tourguide.component';
import { VehcilesComponent } from './tables/vehciles/vehciles.component';
import { RequestsComponent } from './tables/requests/requests.component';
import { TripsComponent } from './tables/trips/trips.component';
import { OrderdetailsComponent } from './tables/orderdetails/orderdetails.component';
import { PlacesComponent } from './tables/places/places.component';
import { HotelsComponent } from './tables/hotels/hotels.component';
// import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
// import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
// import { TourguideDashboardComponent } from './tourguide-dashboard/tourguide-dashboard.component';
import { TripEditFormComponent } from './EditForm/trip-edit-form/trip-edit-form.component';
import { PlacesEditFormComponent } from './EditForm/places-edit-form/places-edit-form.component';
import { PlacesformComponent } from './form/placesform/placesform.component';
import { TripformComponent } from './form/tripform/tripform.component';
import { VehcileformComponent } from './form/vehcileform/vehcileform.component';
import { TourguidelangformComponent } from './form/tourguidelangform/tourguidelangform.component';
import { HotelformComponent } from './form/hotelform/hotelform.component';
import { DashbordHotelOwnwrComponent } from './DashboardHotelOwner/dashbord-hotel-ownwr/dashbord-hotel-ownwr.component';
import { DashbordTourguideComponent } from './DashboardTourguide/dashbord-tourguide/dashbord-tourguide.component';
import { DashbordDriverComponent } from './DashboardDriver/dashbord-driver/dashbord-driver.component';
import { HotelOwnerDashTableComponent } from './DashboardHotelOwner/Table/hotel-owner-dash-table/hotel-owner-dash-table.component';
import { TourguideDashTableComponent } from './DashboardTourguide/Table/tourguide-dash-table/tourguide-dash-table.component';
import { DriverDashTableComponent } from './DashboardDriver/Table/driver-dash-table/driver-dash-table.component';



@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        SignupformComponent,
        AdminComponent,
        DriverComponent,
        HotelOwnerComponent,
        TourguideComponent,
        VehcilesComponent,
        RequestsComponent,
        TripsComponent,
        OrderdetailsComponent,
        PlacesComponent,
        HotelsComponent,
        TripEditFormComponent,
        PlacesEditFormComponent,
        PlacesformComponent,
        TripformComponent,
        VehcileformComponent,
        TourguidelangformComponent,
        HotelformComponent,
        DashbordHotelOwnwrComponent,
        DashbordTourguideComponent,
        DashbordDriverComponent,
        HotelOwnerDashTableComponent,
        TourguideDashTableComponent,
        DriverDashTableComponent,
   
    ],
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        DashboardRoutingModule,
  
     
    ]
})
export class DashboardModule { }
