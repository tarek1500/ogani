import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './details-routing.module';
import { BlogModule } from '../blog.module';
import { BlogDetailsComponent } from './details.component';
import { BlogDetailsHeroComponent } from './hero/hero.component';
import { BlogDetailsItemComponent } from './item/item.component';
import { BlogDetailsRelatedComponent } from './related/related.component';

@NgModule({
	declarations: [
		BlogDetailsComponent,
		BlogDetailsHeroComponent,
		BlogDetailsItemComponent,
		BlogDetailsRelatedComponent
	],
	imports: [
		CommonModule,
		BlogDetailsRoutingModule,
		BlogModule
	]
})
export class BlogDetailsModule { }