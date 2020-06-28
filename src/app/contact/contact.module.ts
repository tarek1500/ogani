import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactInfoComponent } from './info/info.component';
import { ContactMapComponent } from './map/map.component';
import { ContactFormComponent } from './form/form.component';

@NgModule({
	declarations: [
		ContactComponent,
		ContactInfoComponent,
		ContactMapComponent,
		ContactFormComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		SharedModule
	]
})
export class ContactModule { }