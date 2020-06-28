import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomService } from '../../../services/dom.service';

@Component({
	selector: 'app-hero-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
	@ViewChild('categoriesMenu') categoriesRef: ElementRef;
	categoriesOpened: boolean;
	categoriesHeight: number;

	constructor(public router: Router, private domService: DomService) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		this.categoriesHeight = this.domService.getElementHeight(this.categoriesRef.nativeElement);

		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) this.changeCategoriesFlag(event.url === '/');
		});
	}

	changeCategoriesFlag(flag: boolean) {
		this.categoriesOpened = flag;

		if (this.categoriesOpened) (<HTMLElement>this.categoriesRef.nativeElement).style.height = this.categoriesHeight.toString() + 'px';
		else (<HTMLElement>this.categoriesRef.nativeElement).style.height = '0';
	}

	onHeroCategoriesClick(event) {
		this.changeCategoriesFlag(!this.categoriesOpened);
	}
}