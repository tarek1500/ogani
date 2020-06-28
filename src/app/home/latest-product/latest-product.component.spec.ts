import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestProductComponent } from './latest-product.component';

describe('HomeLatestProductComponent', () => {
	let component: HomeLatestProductComponent;
	let fixture: ComponentFixture<HomeLatestProductComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeLatestProductComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeLatestProductComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
