import { RegisterLayoutComponent } from './register-layout/register-layout.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelOwnerRegComponent } from './hotelOwner-reg/hotelOwner-reg.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import {TourgideRegComponent} from './tourgide-reg/tourgide-reg.component';
import {DriverComponent} from './driver/driver.component'



const routes: Routes = [
  { path: "", component: RegisterLayoutComponent, children :[
    {path :"" ,redirectTo :"user-reg",pathMatch:"full"},
    {path: 'user-reg', component: UserRegComponent},
    {path: 'hotelOwner-reg', component: HotelOwnerRegComponent},
    {path: 'tourgideReg-reg', component: TourgideRegComponent},
    {path: 'driver-reg', component: DriverComponent},
  ]
},

]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegisterRoutingModule { }
