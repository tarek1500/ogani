import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopDetailsComponent } from './details.component';

const routes: Routes = [
	{
		path: '',
		component: ShopDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ShopDetailsRoutingModule { }