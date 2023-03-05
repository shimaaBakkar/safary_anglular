import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegComponent } from './user-reg/user-reg.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelOwnerRegComponent } from './hotel-owner-reg/hotel-owner-reg.component';


const routes: Routes = [
  { path: "", component: UserRegComponent, pathMatch: "full" },
  {path: 'user-reg', component: UserRegComponent}
]

@NgModule({
  declarations: [
    UserRegComponent,
    HotelOwnerRegComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
