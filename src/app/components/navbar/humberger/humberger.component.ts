import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar-humberger',
	templateUrl: './humberger.component.html',
	styleUrls: ['./humberger.component.scss']
})
export class NavbarHumbergerComponent implements OnInit {
	@Input() humbergerOpened: boolean;
	@Output() humbergerMenuOverlayClick: EventEmitter<MouseEvent>;

	constructor() {
		this.humbergerMenuOverlayClick = new EventEmitter<MouseEvent>();
	}

	ngOnInit(): void { }

	onHumbergerMenuOverlayClick(event) {
		this.humbergerMenuOverlayClick.emit(event);
	}
}