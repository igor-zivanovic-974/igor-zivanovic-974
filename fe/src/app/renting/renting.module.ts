import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentingRoutingModule } from './renting-routing.module';
import { RentingComponent } from './renting.component';

@NgModule({
  declarations: [RentingComponent],
  imports: [CommonModule, RentingRoutingModule]
})
export class RentingModule {}
