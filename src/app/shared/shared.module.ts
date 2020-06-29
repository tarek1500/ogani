import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlogRelatedComponent } from './blog-related/blog-related.component';
import { LatestProductComponent } from './latest-product/latest-product.component';

@NgModule({
	declarations: [
		BreadcrumbComponent,
		BlogRelatedComponent,
		LatestProductComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		BreadcrumbComponent,
		BlogRelatedComponent,
		LatestProductComponent
	]
})
export class SharedModule { }