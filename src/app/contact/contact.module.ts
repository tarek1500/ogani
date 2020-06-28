import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
	declarations: [
		ContactComponent,
		BreadcrumbComponent,
		ContactInfoComponent,
		MapComponent,
		ContactFormComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule
	]
})
export class ContactModule { }