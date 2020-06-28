import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-blog-related',
	templateUrl: './blog-related.component.html',
	styleUrls: ['./blog-related.component.scss']
})
export class BlogRelatedComponent implements OnInit {
	@Input('title') title: string;
	@Input('home') isHome: boolean;

	constructor() { }

	ngOnInit(): void { }
}