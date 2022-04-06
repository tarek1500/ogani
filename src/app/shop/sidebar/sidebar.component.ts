import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class ShopSidebarComponent implements OnInit {
	latestProductsTitle: string = 'Latest Products';
	value: number[] = [10, 540];
	minValue: number = 10;
	maxValue: number = 540;

	constructor() { }

	ngOnInit(): void { }
}