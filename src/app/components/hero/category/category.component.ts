import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomService } from '../../../services/dom.service';

@Component({
	selector: 'app-hero-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {
	@ViewChild('categoriesMenu') categoriesRef: ElementRef;
	categoriesOpened: boolean = true;
	categoriesHeight: number;

	constructor(private domService: DomService) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		this.categoriesHeight = this.domService.getElementHeight(this.categoriesRef.nativeElement);
		(<HTMLElement>this.categoriesRef.nativeElement).style.height = this.categoriesHeight.toString() + 'px';
	}

	onHeroCategoriesClick(event) {
		this.categoriesOpened = !this.categoriesOpened;

		if (this.categoriesOpened) (<HTMLElement>this.categoriesRef.nativeElement).style.height = this.categoriesHeight.toString() + 'px';
		else (<HTMLElement>this.categoriesRef.nativeElement).style.height = '0';
	}
}