import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Checkout', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Checkout'
			}
		]);
	}
}