import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMapComponent } from './map.component';

describe('ContactMapComponent', () => {
	let component: ContactMapComponent;
	let fixture: ComponentFixture<ContactMapComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContactMapComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
