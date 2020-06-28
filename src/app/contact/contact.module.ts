import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
	declarations: [
		ContactComponent,
		ContactInfoComponent,
		MapComponent,
		ContactFormComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule
	]
})
export class ContactModule { }