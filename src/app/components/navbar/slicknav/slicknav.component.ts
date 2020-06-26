import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomService } from '../../../services/dom.service';

@Component({
	selector: 'app-navbar-slicknav',
	templateUrl: './slicknav.component.html',
	styleUrls: ['./slicknav.component.scss']
})
export class SlicknavComponent implements OnInit, AfterViewInit {
	@ViewChild('pagesMenu') pagesRef: ElementRef;
	pagesOpened: boolean = false;
	pagesHeight: number;

	constructor(private domService: DomService) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		this.pagesHeight = this.domService.getElementHeight(this.pagesRef.nativeElement);
		(<HTMLElement>this.pagesRef.nativeElement).style.height = '0';
	}

	onPagesClick(event) {
		this.pagesOpened = !this.pagesOpened;

		if (this.pagesOpened) (<HTMLElement>this.pagesRef.nativeElement).style.height = this.pagesHeight.toString() + 'px';
		else (<HTMLElement>this.pagesRef.nativeElement).style.height = '0';
	}
}