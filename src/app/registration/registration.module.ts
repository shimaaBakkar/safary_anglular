import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrationComponent,
    UserComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RegistrationRoutingModule,
 
  ]
})
export class RegistrationModule {

 }
