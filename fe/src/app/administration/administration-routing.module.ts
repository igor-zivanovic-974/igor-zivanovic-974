import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AdministrationComponent } from './administration.component';
import { extract, AuthenticationGuard } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'administration',
      component: AdministrationComponent,
      canActivate: [AuthenticationGuard],
      data: { title: extract('Administration') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
