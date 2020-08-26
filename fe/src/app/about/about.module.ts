import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SharedModule,
    TranslateModule,
    TranslateModule,
    AboutRoutingModule],
  declarations: [AboutComponent],
  providers: [AboutService]
})
export class AboutModule { }
