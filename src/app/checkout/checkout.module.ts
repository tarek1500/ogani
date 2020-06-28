import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';

@NgModule({
	declarations: [
		CheckoutComponent,
		CheckoutFormComponent,
		CheckoutOrderComponent
	],
	imports: [
		CommonModule,
		CheckoutRoutingModule,
		SharedModule
	]
})
export class CheckoutModule { }
