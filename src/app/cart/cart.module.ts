import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { CartButtonsComponent } from './cart-buttons/cart-buttons.component';

@NgModule({
	declarations: [
		CartComponent,
		CartTableComponent,
		CartButtonsComponent
	],
	imports: [
		CommonModule,
		CartRoutingModule,
		SharedModule
	]
})
export class CartModule { }