import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { BrandsComponent } from './brands.component';
import { extract } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([{ path: 'partners', component: BrandsComponent, data: { title: extract('Partners') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
