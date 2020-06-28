import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSlicknavComponent } from './slicknav.component';

describe('NavbarSlicknavComponent', () => {
	let component: NavbarSlicknavComponent;
	let fixture: ComponentFixture<NavbarSlicknavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NavbarSlicknavComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarSlicknavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
