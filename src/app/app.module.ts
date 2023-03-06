import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageModule } from './landingpage/landingpage.module';
import { PlacesModule } from './places/places.module';
import { AllTripModule } from './all-trip/all-trip.module';
import { CustomizeTripModule } from './customize-trip/customize-trip.module';
import { RouterModule } from '@angular/router';
import { HotelsModule } from './hotels/hotels.module';

import { TourguideModule } from './tourguide/tourguide.module';
import { VehcileModule } from './vehcile/vehcile.module';
import { RegisterModule } from './register/register.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
 
    AppComponent,
       NavbarComponent,
       FooterComponent,
  

      
  

  ],
  imports: [
    CustomizeTripModule,
    NgxSpinnerModule.forRoot({ type: 'ball-atom' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingpageModule,
    AllTripModule,
    HotelsModule,
    PlacesModule,
    VehcileModule,
    TourguideModule,
    RegisterModule,
    RouterModule

  

  ],


  providers: [],
  bootstrap: [AppComponent],
  // exports: [
  //   CommonModule,
  //   FormsModule,
  //   ReactiveFormsModule
  // ]
})
export class AppModule {

 }


