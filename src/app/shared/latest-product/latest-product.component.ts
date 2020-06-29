import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-latest-product',
	templateUrl: './latest-product.component.html',
	styleUrls: ['./latest-product.component.scss']
})
export class LatestProductComponent implements OnInit {
	@Input('title') title: string;
	@Input('width') width: number;
	@Input('maxWidth') maxWidth: number;

	constructor() { }

	ngOnInit(): void { }
}