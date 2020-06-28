import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Shopping Cart', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Shopping Cart'
			}
		]);
	}
}