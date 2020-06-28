import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartTableComponent } from './table/table.component';
import { CartOptionsComponent } from './options/options.component';

@NgModule({
	declarations: [
		CartComponent,
		CartTableComponent,
		CartOptionsComponent
	],
	imports: [
		CommonModule,
		CartRoutingModule,
		SharedModule
	]
})
export class CartModule { }