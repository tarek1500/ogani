import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HumbergerComponent as NavbarHumbergerComponent } from './components/navbar/humberger/humberger.component';
import { SlicknavComponent as NavbarSlicknavComponent } from './components/navbar/slicknav/slicknav.component';
import { HeaderComponent as NavbarHeaderComponent } from './components/navbar/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent as HeroCategoryComponent } from './components/hero/category/category.component';
import { SearchComponent as HeroSearchComponent } from './components/hero/search/search.component';
import { BannerComponent as HeroBannerComponent } from './components/hero/banner/banner.component';

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
		HeroBannerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
