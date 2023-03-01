import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTripRoutingModule } from './all-trip-routing.module';
import { AllTripComponent } from './all-trip.component';
import { TripcardComponent } from './tripcard/tripcard.component';
import { TripComponent } from './trip/trip.component';
import { LandingpageModule } from "../landingpage/landingpage.module";


@NgModule({
    declarations: [
        AllTripComponent,
        TripcardComponent,
        TripComponent
    ],
    imports: [
        CommonModule,
        AllTripRoutingModule,
        LandingpageModule
    ]
})
export class AllTripModule { }
