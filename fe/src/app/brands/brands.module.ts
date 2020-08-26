import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { BrandsService } from './brands.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [BrandsComponent],
  imports: [CommonModule, SharedModule, TranslateModule, BrandsRoutingModule],
  providers: [BrandsService]
})
export class BrandsModule { }
