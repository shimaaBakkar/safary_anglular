import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AllHotelsComponent} from './all-hotels/all-hotels.component'
import {RoomComponent} from './room/room.component'
// import { Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "hotels", pathMatch: "full" },
  {
    path: 'hotels', component: AllHotelsComponent, children: [
      {path: "", redirectTo: "hotels", pathMatch: "full"},
      {path: "room", component: RoomComponent}
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class HotelRoutingModule { }