import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import mixitup from 'mixitup';

@Component({
	selector: 'app-featured',
	templateUrl: './featured.component.html',
	styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit, AfterViewInit {
	@ViewChild('featuredContainer') featuredContainerRef: ElementRef;
	@ViewChild('featuredItems') featuredItemRef: ElementRef;

	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		mixitup(this.featuredContainerRef.nativeElement);
	}

	onFeaturedItemClick(event) {
		let children = this.featuredItemRef.nativeElement.children;

		for (let i = 0; i < children.length; i++)
			(<HTMLElement>children[i]).classList.remove('active');

		(<HTMLElement>event.target).classList.add('active');
	}
}