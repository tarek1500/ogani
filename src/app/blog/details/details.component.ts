import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-blog-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
	relatedBlogTitle: string = 'Post You May Like';

	constructor() { }

	ngOnInit(): void { }
}