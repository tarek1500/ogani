import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlogRelatedComponent } from './blog-related/blog-related.component';

@NgModule({
	declarations: [
		BreadcrumbComponent,
		BlogRelatedComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		BreadcrumbComponent,
		BlogRelatedComponent
	]
})
export class SharedModule { }