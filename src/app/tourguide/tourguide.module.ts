import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourguideRoutingModule } from './tourguide-routing.module';
import { TourguideComponent } from './tourguide.component';
import { TourguidepageComponent } from './tourguidepage/tourguidepage.component';
import { TourguidecardComponent } from './tourguidecard/tourguidecard.component';


@NgModule({
  declarations: [
    TourguideComponent,
    TourguidepageComponent,
    TourguidecardComponent
  ],
  imports: [
    CommonModule,
    TourguideRoutingModule
  ]
})
export class TourguideModule { }
