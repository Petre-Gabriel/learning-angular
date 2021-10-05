import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../core/not-found-page/not-found-page.component';

import { ProductsListComponent } from '../products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
