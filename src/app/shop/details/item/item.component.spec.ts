import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsItemComponent } from './item.component';

describe('ShopDetailsItemComponent', () => {
	let component: ShopDetailsItemComponent;
	let fixture: ComponentFixture<ShopDetailsItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ShopDetailsItemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShopDetailsItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
