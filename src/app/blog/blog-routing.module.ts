import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

const routes: Routes = [
	{
		path: '',
		component: BlogComponent
	},
	{
		path: 'details',
		loadChildren: () => import('./details/details.module').then(m => m.BlogDetailsModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlogRoutingModule { }