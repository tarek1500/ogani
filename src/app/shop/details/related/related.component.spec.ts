import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsRelatedComponent } from './related.component';

describe('ShopDetailsRelatedComponent', () => {
	let component: ShopDetailsRelatedComponent;
	let fixture: ComponentFixture<ShopDetailsRelatedComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ShopDetailsRelatedComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShopDetailsRelatedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
