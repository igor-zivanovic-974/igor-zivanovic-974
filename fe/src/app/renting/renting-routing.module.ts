import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { RentingComponent } from './renting.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'renting', component: RentingComponent, data: { title: extract('Renting') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentingRoutingModule {}
