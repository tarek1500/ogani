import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogModule } from '../blog.module';
import { BlogDetailsComponent } from './blog-details.component';
import { HeroComponent } from './hero/hero.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogRelatedComponent } from './blog-related/blog-related.component';

@NgModule({
	declarations: [
		BlogDetailsComponent,
		HeroComponent,
		BlogItemComponent,
		BlogRelatedComponent
	],
	imports: [
		CommonModule,
		BlogDetailsRoutingModule,
		BlogModule
	]
})
export class BlogDetailsModule { }