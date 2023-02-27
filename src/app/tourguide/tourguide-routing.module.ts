import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourguideComponent } from './tourguide.component';

const routes: Routes = [{ path: '', component: TourguideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourguideRoutingModule { }
