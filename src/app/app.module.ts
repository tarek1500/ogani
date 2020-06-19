import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HumbergerComponent } from './components/navbar/humberger/humberger.component';
import { SlicknavComponent } from './components/navbar/slicknav/slicknav.component';
import { HeaderComponent } from './components/navbar/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HumbergerComponent,
		SlicknavComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
