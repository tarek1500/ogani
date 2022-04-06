import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-home-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
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
			},
			510: {
				items: 2
			},
			930: {
				items: 3
			},
			1110: {
				items: 4
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