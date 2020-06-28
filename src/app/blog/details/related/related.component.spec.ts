import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsRelatedComponent } from './related.component';

describe('BlogDetailsRelatedComponent', () => {
	let component: BlogDetailsRelatedComponent;
	let fixture: ComponentFixture<BlogDetailsRelatedComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogDetailsRelatedComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogDetailsRelatedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
