import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	humbergerOpened: boolean = false;

	constructor(private renderer: Renderer2) { }

	ngOnInit(): void { }

	onHumbergerMenuOverlayClick(event) {
		this.humbergerOpened = false;
		this.renderer.removeClass(document.body, 'over_hid');
	}

	onHumbergerOpenClick(event) {
		this.humbergerOpened = true;
		this.renderer.addClass(document.body, 'over_hid');
	}
}