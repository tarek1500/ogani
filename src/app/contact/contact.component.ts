import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Contact Us', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Contact Us'
			}
		]);
	}
}