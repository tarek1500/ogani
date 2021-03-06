import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemsComponent } from './items.component';

describe('BlogItemsComponent', () => {
	let component: BlogItemsComponent;
	let fixture: ComponentFixture<BlogItemsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogItemsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogItemsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
