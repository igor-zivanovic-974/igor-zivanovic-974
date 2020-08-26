import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '@app/shared';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    AccordionModule,
    SharedModule,
    TranslateModule,
    ProductsRoutingModule
  ],
  entryComponents: [ProductDetailsComponent]
})
export class ProductsModule { }
