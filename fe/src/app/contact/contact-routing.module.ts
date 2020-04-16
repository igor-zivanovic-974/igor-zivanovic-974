import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ContactComponent } from './contact.component';
import { extract } from '@app/core';

const routes: Routes = [
  Shell.childRoutes([{ path: 'contact', component: ContactComponent, data: { title: extract('Contact') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
