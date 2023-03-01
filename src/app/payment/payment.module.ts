import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PayComponent } from './pay/pay.component';
import { PayproductComponent } from './payproduct/payproduct.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PayComponent,
    PayproductComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
