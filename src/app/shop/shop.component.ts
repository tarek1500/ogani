import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Organi Shop', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Shop'
			}
		]);
	}
}