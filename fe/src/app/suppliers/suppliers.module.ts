import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { SuppliersService } from './suppliers.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SuppliersComponent],
  imports: [CommonModule, TranslateModule, SuppliersRoutingModule],
  providers: [SuppliersService]
})
export class SuppliersModule {}
