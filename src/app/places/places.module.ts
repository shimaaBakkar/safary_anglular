import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { PlaaceDescComponent } from './plaace-desc/plaace-desc.component';
import { AboutDesplacesComponent } from './about-desplaces/about-desplaces.component';
import { AllplacesComponent } from './allplaces/allplaces.component';
import { AllplacescardComponent } from './allplacescard/allplacescard.component';
import { PlacesviewComponent } from './placesview/placesview.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
PlacesComponent,
    PlaaceDescComponent,
    AboutDesplacesComponent,
    AllplacesComponent,
    AllplacescardComponent,
    PlacesviewComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    HttpClientModule
  ],
  exports: [ 

    PlaaceDescComponent,
    AboutDesplacesComponent,
    AllplacesComponent,
    AllplacescardComponent,
    PlacesviewComponent]
})

export class PlacesModule {


 }
