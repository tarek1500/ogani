import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsItemComponent } from './item.component';

describe('BlogDetailsItemComponent', () => {
	let component: BlogDetailsItemComponent;
	let fixture: ComponentFixture<BlogDetailsItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogDetailsItemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogDetailsItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
