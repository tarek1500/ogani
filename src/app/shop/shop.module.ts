import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopSidebarComponent } from './sidebar/sidebar.component';
import { ShopDiscountComponent } from './discount/discount.component';
import { ShopItemsComponent } from './items/items.component';

@NgModule({
	declarations: [
		ShopComponent,
		ShopSidebarComponent,
		ShopDiscountComponent,
		ShopItemsComponent
	],
	imports: [
		CommonModule,
		ShopRoutingModule,
		SharedModule
	]
})
export class ShopModule { }