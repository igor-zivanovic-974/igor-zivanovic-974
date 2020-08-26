import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsedComponent } from './used.component';
import { UsedRoutingModule } from './used-routing.module';
import { UsedService } from './used.service';
import { SharedModule } from '@app/shared';
import { TranslateService, TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [UsedComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    UsedRoutingModule
  ],
  providers: [UsedService]
})
export class UsedModule { }
