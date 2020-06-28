import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsHeroComponent } from './hero.component';

describe('BlogDetailsHeroComponent', () => {
	let component: BlogDetailsHeroComponent;
	let fixture: ComponentFixture<BlogDetailsHeroComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BlogDetailsHeroComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogDetailsHeroComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
