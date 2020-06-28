import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSidebarComponent } from './sidebar.component';

describe('BlogSidebarComponent', () => {
	let component: BlogSidebarComponent;
	let fixture: ComponentFixture<BlogSidebarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogSidebarComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogSidebarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
