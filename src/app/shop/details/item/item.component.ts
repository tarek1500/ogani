import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-shop-details-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ShopDetailsItemComponent implements OnInit {
	@ViewChild('productDetails') productDetailsRef: ElementRef;
	@ViewChild('productTabs') productTabsRef: ElementRef;

	sliderImage: string = 'assets/img/product/details/product-details-1.jpg';
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 1200,
		margin: 25,
		responsive: {
			0: {
				items: 4
			}
		},
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1200
	}

	constructor() { }

	ngOnInit(): void { }

	onProductSliderClick(event) {
		this.sliderImage = (<HTMLElement>event.target).dataset.imgbigurl;
	}

	onQuantityDecreaseClick(event) {
		let input = (<HTMLElement>event.target).parentElement.querySelector('input');
		let oldValue = parseFloat(input.value);
		input.value = (oldValue > 0 ? oldValue - 1 : 0).toString();
	}

	onQuantityIncreaseClick(event) {
		let input = (<HTMLElement>event.target).parentElement.querySelector('input');
		input.value = (parseFloat(input.value) + 1).toString();
	}

	onProductDetailsClick(event) {
		event.preventDefault();
		let children = this.productDetailsRef.nativeElement.children;

		for (let i = 0; i < children.length; i++)
			(<HTMLElement>children[i]).querySelector('.nav-link').classList.remove('active');
		
		children = this.productTabsRef.nativeElement.children;

		for (let i = 0; i < children.length; i++)
			(<HTMLElement>children[i]).classList.remove('active');

		(<HTMLElement>event.target).classList.add('active');
		(<HTMLElement>this.productTabsRef.nativeElement).querySelector((<HTMLElement>event.target).getAttribute('href')).classList.add('active');
	}
}