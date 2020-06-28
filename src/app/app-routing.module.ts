import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
	},
	{
		path: 'cart',
		loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }