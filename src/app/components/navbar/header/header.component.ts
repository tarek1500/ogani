import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {
	@Output() humbergerOpenClick: EventEmitter<MouseEvent>;

	constructor() {
		this.humbergerOpenClick = new EventEmitter<MouseEvent>();
	}

	ngOnInit(): void { }

	onHumbergerOpenClick(event) {
		this.humbergerOpenClick.emit(event);
	}
}