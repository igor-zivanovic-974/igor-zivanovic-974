import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentingRoutingModule } from './renting-routing.module';
import { RentingComponent } from './renting.component';
import { SharedModule } from '@app/shared';
import { RentingService } from './renting.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RentingComponent],
  imports: [CommonModule, SharedModule, TranslateModule, RentingRoutingModule],
  providers: [RentingService]
})
export class RentingModule { }
