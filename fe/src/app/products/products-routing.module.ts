import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ProductsComponent } from './products.component';
import { extract } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([{ path: 'products', component: ProductsComponent, data: { title: extract('Products') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
