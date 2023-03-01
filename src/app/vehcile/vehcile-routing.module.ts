import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehcileComponent } from './vehcile.component';

const routes: Routes = [{ path: '', component: VehcileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehcileRoutingModule { }
