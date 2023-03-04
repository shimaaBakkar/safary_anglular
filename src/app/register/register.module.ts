import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegComponent } from './user-reg/user-reg.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: "", component: UserRegComponent, pathMatch: "full" },
  {path: 'user-reg', component: UserRegComponent}
]

@NgModule({
  declarations: [
    UserRegComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
