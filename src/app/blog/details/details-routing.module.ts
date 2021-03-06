import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailsComponent } from './details.component';

const routes: Routes = [
	{
		path: '',
		component: BlogDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlogDetailsRoutingModule { }