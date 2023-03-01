import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehcileRoutingModule } from './vehcile-routing.module';
import { VehcileComponent } from './vehcile.component';
import { VehcilepageComponent } from './vehcilepage/vehcilepage.component';
import { VehcilecardComponent } from './vehcilecard/vehcilecard.component';


@NgModule({
  declarations: [
    VehcileComponent,
    VehcilepageComponent,
    VehcilecardComponent
  ],
  imports: [
    CommonModule,
    VehcileRoutingModule
  ]
})
export class VehcileModule { }
