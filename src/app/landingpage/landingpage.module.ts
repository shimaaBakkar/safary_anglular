import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';
import { HomeComponent } from './home/home.component';
import { OurTripComponent } from './our-trip/our-trip.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    HomeComponent,
    OurTripComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ],
  exports:[
    HomeComponent,
    OurTripComponent
  ]
})
export class LandingpageModule { }
