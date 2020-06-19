import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DomService {
	constructor() { }

	getElementHeight(element: HTMLElement) {
		var el_style = window.getComputedStyle(element),
			el_display = el_style.display,
			el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),
			wanted_height = 0;

		// if its not hidden we just return normal height
		if (el_display !== 'none' && el_max_height !== '0')
			return element.offsetHeight;

		// the element is hidden so: making the el block so we can meassure its height but still be hidden
		element.style.setProperty('position', 'absolute');
		element.style.setProperty('visibility', 'hidden');
		element.style.setProperty('display', 'block');

		wanted_height = element.offsetHeight;

		// reverting to the original values
		element.style.removeProperty('display');
		element.style.removeProperty('position');
		element.style.removeProperty('visibility');

		return wanted_height;
	}
}