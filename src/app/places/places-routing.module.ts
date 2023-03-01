import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaaceDescComponent } from './plaace-desc/plaace-desc.component';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  { path: "", component:PlacesComponent, pathMatch: "full" },
  {path: 'placesDesc', component: PlaaceDescComponent, children: [
      { path: "", redirectTo: "places", pathMatch: "full" },
  
  ]
},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule
  ]
})
export class PlacesRoutingModule { 

}
