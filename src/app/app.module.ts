import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarHumbergerComponent } from './components/navbar/humberger/humberger.component';
import { NavbarSlicknavComponent } from './components/navbar/slicknav/slicknav.component';
import { NavbarHeaderComponent } from './components/navbar/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroCategoryComponent } from './components/hero/category/category.component';
import { HeroSearchComponent } from './components/hero/search/search.component';
import { HeroBannerComponent } from './components/hero/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NavbarHumbergerComponent,
		NavbarSlicknavComponent,
		NavbarHeaderComponent,
		HeroComponent,
		HeroCategoryComponent,
		HeroSearchComponent,
		HeroBannerComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }