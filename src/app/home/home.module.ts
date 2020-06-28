import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCategoryComponent } from './category/category.component';
import { HomeFeaturedComponent } from './featured/featured.component';
import { HomeBannerComponent } from './banner/banner.component';
import { HomeLatestProductComponent } from './latest-product/latest-product.component';
import { HomeFromBlogComponent } from './from-blog/from-blog.component';

@NgModule({
	declarations: [
		HomeComponent,
		HomeCategoryComponent,
		HomeFeaturedComponent,
		HomeBannerComponent,
		HomeLatestProductComponent,
		HomeFromBlogComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }