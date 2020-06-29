import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeCategoryComponent } from './category/category.component';
import { HomeFeaturedComponent } from './featured/featured.component';
import { HomeBannerComponent } from './banner/banner.component';

@NgModule({
	declarations: [
		HomeComponent,
		HomeCategoryComponent,
		HomeFeaturedComponent,
		HomeBannerComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule
	]
})
export class HomeModule { }