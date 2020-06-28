import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHumbergerComponent } from './humberger.component';

describe('NavbarHumbergerComponent', () => {
	let component: NavbarHumbergerComponent;
	let fixture: ComponentFixture<NavbarHumbergerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NavbarHumbergerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarHumbergerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
