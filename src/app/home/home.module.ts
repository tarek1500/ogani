import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { FeaturedComponent } from './featured/featured.component';
import { BannerComponent } from './banner/banner.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { FromBlogComponent } from './from-blog/from-blog.component';

@NgModule({
	declarations: [
		HomeComponent,
		CategoryComponent,
		FeaturedComponent,
		BannerComponent,
		LatestProductComponent,
		FromBlogComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }