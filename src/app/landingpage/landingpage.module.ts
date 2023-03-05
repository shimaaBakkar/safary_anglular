import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';
import { HomeComponent } from './home/home.component';
import { OurTripComponent } from './our-trip/our-trip.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: HomeComponent , children :[
    {path :"" ,redirectTo :"Safary Aswan",pathMatch:"full"},
  ]
},
]

@NgModule({
  declarations: [
    LandingpageComponent,
    HomeComponent,
    OurTripComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    HomeComponent,
    OurTripComponent,
    RouterModule
  ]
})
export class LandingpageModule { }
RouterModule.forChild(routes)
