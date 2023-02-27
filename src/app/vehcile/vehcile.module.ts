import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehcileRoutingModule } from './vehcile-routing.module';
import { VehcileComponent } from './vehcile.component';


@NgModule({
  declarations: [
    VehcileComponent
  ],
  imports: [
    CommonModule,
    VehcileRoutingModule
  ]
})
export class VehcileModule { }
