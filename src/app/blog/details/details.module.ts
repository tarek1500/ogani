import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './details-routing.module';
import { BlogModule } from '../blog.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailsComponent } from './details.component';
import { BlogDetailsHeroComponent } from './hero/hero.component';
import { BlogDetailsItemComponent } from './item/item.component';

@NgModule({
	declarations: [
		BlogDetailsComponent,
		BlogDetailsHeroComponent,
		BlogDetailsItemComponent
	],
	imports: [
		CommonModule,
		BlogDetailsRoutingModule,
		BlogModule,
		SharedModule
	]
})
export class BlogDetailsModule { }