import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHotelsComponent } from './all-hotels/all-hotels.component';
import { RoomComponent } from './room/room.component';
import { HotelRoutingModule } from './hotel-routing.module';

@NgModule({
  declarations: [
    AllHotelsComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelsModule { }
