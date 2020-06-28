import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	breadcrumb: Breadcrumb;

	constructor() { }

	ngOnInit(): void {
		this.breadcrumb = new Breadcrumb('Blog', [
			{
				title: 'Home',
				link: './index.html'
			},
			{
				title: 'Blog'
			}
		]);
	}
}