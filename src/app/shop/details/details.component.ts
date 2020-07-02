import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb.model';

@Component({
	selector: 'app-shop-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Vegetable’s Package', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Vegetables',
				link: './index.html'
			},
			{
				title: 'Vegetable’s Package'
			}
		]);
	}
}