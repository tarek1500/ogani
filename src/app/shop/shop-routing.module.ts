import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';

const routes: Routes = [
	{
		path: '',
		component: ShopComponent
	},
	{
		path: 'details',
		loadChildren: () => import('./details/details.module').then(m => m.ShopDetailsModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ShopRoutingModule { }