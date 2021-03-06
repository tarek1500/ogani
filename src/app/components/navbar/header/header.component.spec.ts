import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeaderComponent } from './header.component';

describe('NavbarHeaderComponent', () => {
	let component: NavbarHeaderComponent;
	let fixture: ComponentFixture<NavbarHeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NavbarHeaderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
