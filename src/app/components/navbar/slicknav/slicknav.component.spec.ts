import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicknavComponent } from './slicknav.component';

describe('SlicknavComponent', () => {
	let component: SlicknavComponent;
	let fixture: ComponentFixture<SlicknavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SlicknavComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SlicknavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
