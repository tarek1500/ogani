import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ShopItemsComponent implements OnInit {
	isGridView: boolean = true;

	constructor() { }

	ngOnInit(): void { }
}