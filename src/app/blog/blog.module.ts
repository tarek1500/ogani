import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogItemsComponent } from './blog-items/blog-items.component';

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
	]
})
export class BlogModule { }
