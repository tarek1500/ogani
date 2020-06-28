import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog.component';
import { BlogSidebarComponent } from './sidebar/sidebar.component';
import { BlogItemsComponent } from './items/items.component';

@NgModule({
	declarations: [
		BlogComponent,
		BlogSidebarComponent,
		BlogItemsComponent
	],
	imports: [
		CommonModule,
		BlogRoutingModule,
		SharedModule
	],
	exports: [
		BlogSidebarComponent
	]
})
export class BlogModule { }