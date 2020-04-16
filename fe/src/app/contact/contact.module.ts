import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule],
  providers: [ContactService]
})
export class ContactModule {}
