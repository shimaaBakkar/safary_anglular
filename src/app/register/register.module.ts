import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegComponent } from './user-reg/user-reg.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelOwnerRegComponent } from './hotelOwner-reg/hotelOwner-reg.component';
import { TourgideRegComponent } from './tourgide-reg/tourgide-reg.component';


const routes: Routes = [
  { path: "", component: UserRegComponent, pathMatch: "full" },
  // {path: 'user-reg', component: UserRegComponent},
  {path: 'hotelOwner-reg', component: HotelOwnerRegComponent}

]

@NgModule({
  declarations: [
    UserRegComponent,
    HotelOwnerRegComponent,
    TourgideRegComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
