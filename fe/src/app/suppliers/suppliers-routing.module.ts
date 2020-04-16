import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { SuppliersComponent } from './suppliers.component';
import { extract } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([{ path: 'suppliers', component: SuppliersComponent, data: { title: extract('Suppliers') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule {}
