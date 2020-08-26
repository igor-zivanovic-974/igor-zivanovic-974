import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';
import { RentingModule } from './renting/renting.module';
import { BrandsModule } from './brands/brands.module';
import { AdministrationModule } from './administration/administration.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NotifierModule } from 'angular-notifier';
import { NgImageSliderModule } from 'ng-image-slider';
import { UsedModule } from './used/used.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    FormsModule,
    NotifierModule,
    AccordionModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AdministrationModule,
    AboutModule,
    ContactModule,
    ProductsModule,
    RentingModule,
    UsedModule,
    BrandsModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
