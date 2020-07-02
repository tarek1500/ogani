import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class ShopSidebarComponent implements OnInit {
	latestProductsTitle: string = 'Latest Products';

	constructor() { }

	ngOnInit(): void { }
}