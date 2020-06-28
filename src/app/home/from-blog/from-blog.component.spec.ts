import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFromBlogComponent } from './from-blog.component';

describe('HomeFromBlogComponent', () => {
	let component: HomeFromBlogComponent;
	let fixture: ComponentFixture<HomeFromBlogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeFromBlogComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeFromBlogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
