import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { AdministrationService } from './administration.service';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule],
  providers: [AdministrationService]
})
export class AdministrationModule {}
