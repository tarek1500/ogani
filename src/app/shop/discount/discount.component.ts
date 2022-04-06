import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-shop-discount',
	templateUrl: './discount.component.html',
	styleUrls: ['./discount.component.scss']
})
export class ShopDiscountComponent implements OnInit {
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: true,
		navSpeed: 1200,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 2
			},
			720: {
				items: 3
			}
		},
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1200,
		autoplayHoverPause: true
	}

	constructor() { }

	ngOnInit(): void { }
}