import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTripComponent } from './all-trip.component';

const routes: Routes = [{ path: '', component: AllTripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTripRoutingModule { }
