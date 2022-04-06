import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-latest-product',
	templateUrl: './latest-product.component.html',
	styleUrls: ['./latest-product.component.scss']
})
export class LatestProductComponent implements OnInit {
	@Input('title') title: string;
	@Input('width') width: number;
	@Input('maxWidth') maxWidth: number;

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 1200,
		navText: ['<', '>'],
		margin: 30,
		responsive: {
			0: {
				items: 1
			}
		},
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1200,
		autoplayHoverPause: true
	}

	constructor() { }

	ngOnInit(): void { }
}