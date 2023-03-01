import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
  ,
  exports:[AboutRoutingModule]
})
export class AboutModule { }
