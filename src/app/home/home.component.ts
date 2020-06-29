import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	fromBlogTitle: string = 'From The Blog';
	latestProductsTitle: string = 'Latest Products';
	topRatedProductsTitle: string = 'Top Rated Products';
	reviewProductsTitle: string = 'Review Products';

	constructor() { }

	ngOnInit(): void { }
}