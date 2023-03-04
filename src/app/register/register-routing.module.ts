import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {UserRegComponent} from './user-reg/user-reg.component'


const routes: Routes = [
  { path: "", component: UserRegComponent, pathMatch: "full" },
  {path: 'user-reg', component: UserRegComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegisterRoutingModule { }
