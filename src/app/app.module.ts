import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
import { CategoryComponent } from './components/category/category.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { BannerComponent } from './components/banner/banner.component';
import { LatestProductComponent } from './components/latest-product/latest-product.component';

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
		CategoryComponent,
		FeaturedComponent,
		BannerComponent,
		LatestProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CarouselModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
