import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { UsedComponent } from './used.component';
import { extract } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([{ path: 'used', component: UsedComponent, data: { title: extract('Used') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsedRoutingModule { }
