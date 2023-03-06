import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './custo_hotel/hotel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PlaceComponent } from './custom_place/place.component';
import { CustomTourgideComponent } from './custom-tourgide/custom-tourgide.component';
import { CustomTripDetailsComponent } from './custom-trip-details/custom-trip-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: "", redirectTo: "customize", pathMatch: "full" },
  {
    path: 'customize', component: CustomLayoutComponent, children: [
      { path: "", redirectTo: "trip", pathMatch: "full" },
      { path: 'trip', component: CustomTripDetailsComponent },
      { path: 'hotel', component: HotelComponent },
      { path: 'place', component: PlaceComponent },
   
      { path: 'tourgide', component: CustomTourgideComponent },
    ]
  },
  // { path: 'trip', component: CustomTripDetailsComponent },
];

@NgModule({
  declarations: [
    HotelComponent,
    PaginationComponent,
    PlaceComponent,
    CustomTourgideComponent,
    CustomTripDetailsComponent,
    CustomLayoutComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
 export class CustomizeTripModule { }


