import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NavbarComponent } from './temp/navbar/navbar.component';
// import {FooterComponent} from './temp/footer/footer.component';
import { LandingpageModule } from './landingpage/landingpage.module';
import { PlacesModule } from './places/places.module';
import { AllTripModule } from './all-trip/all-trip.module';
import { CustomizeTripModule } from './customize-trip/customize-trip.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HotelsModule } from './hotels/hotels.module';
import { TempModule } from './temp/temp.module';
import { TourguideModule } from './tourguide/tourguide.module';
import { VehcileModule } from './vehcile/vehcile.module';
import { RegisterModule } from './register/register.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';







@NgModule({
  declarations: [
 
    AppComponent,
       NavbarComponent,
       FooterComponent,


   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingpageModule,
    AllTripModule,
    CustomizeTripModule,
    DashboardModule,
    HotelsModule,
    PlacesModule,
    RegisterModule,
    TourguideModule,
    VehcileModule,
    // TempModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
