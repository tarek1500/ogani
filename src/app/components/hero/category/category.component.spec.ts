import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCategoryComponent } from './category.component';

describe('HeroCategoryComponent', () => {
	let component: HeroCategoryComponent;
	let fixture: ComponentFixture<HeroCategoryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HeroCategoryComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeroCategoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
