import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class CartTableComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }

	onQuantityDecreaseClick(event) {
		let input = (<HTMLElement>event.target).parentElement.querySelector('input');
		let oldValue = parseFloat(input.value);
		input.value = (oldValue > 0 ? oldValue - 1 : 0).toString();
	}

	onQuantityIncreaseClick(event) {
		let input = (<HTMLElement>event.target).parentElement.querySelector('input');
		input.value = (parseFloat(input.value) + 1).toString();
	}
}