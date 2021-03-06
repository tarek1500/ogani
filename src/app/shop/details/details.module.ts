import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ShopDetailsRoutingModule } from './details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopDetailsComponent } from './details.component';
import { ShopDetailsItemComponent } from './item/item.component';
import { ShopDetailsRelatedComponent } from './related/related.component';

@NgModule({
	declarations: [
		ShopDetailsComponent,
		ShopDetailsItemComponent,
		ShopDetailsRelatedComponent
	],
	imports: [
		CommonModule,
		ShopDetailsRoutingModule,
		SharedModule,
		CarouselModule
	]
})
export class ShopDetailsModule { }