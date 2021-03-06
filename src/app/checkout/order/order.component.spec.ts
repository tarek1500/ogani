import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderComponent } from './order.component';

describe('CheckoutOrderComponent', () => {
	let component: CheckoutOrderComponent;
	let fixture: ComponentFixture<CheckoutOrderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CheckoutOrderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CheckoutOrderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
