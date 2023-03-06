import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourguideRoutingModule } from './tourguide-routing.module';
import { TourguideComponent } from './tourguide.component';
import { TourguidepageComponent } from './tourguidepage/tourguidepage.component';
import { TourguidecardComponent } from './tourguidecard/tourguidecard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    TourguideComponent,
    TourguidepageComponent,
    TourguidecardComponent,
    
  
  ],
  imports: [
    CommonModule,
    TourguideRoutingModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),

  ]

})
export class TourguideModule { }
