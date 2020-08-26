import { Component, OnInit } from '@angular/core';
import { BrandsService } from './brands.service';
import { Brand } from '@app/core/interfaces/brand';
import { TranslateService } from '@ngx-translate/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands: Brand[] = [];
  breadcrumbs: Breadcrumb[] = [];

  constructor(private _brandsService: BrandsService, private translate: TranslateService) { }

  ngOnInit() {
    this.brands = this._brandsService.brands;
    this.breadcrumbs = this._brandsService.breadcrumbs;
    // this.getBrands();
  }

  getBrands() {
    this._brandsService.getBrands().subscribe((brands: Brand[]) => {
      this.brands = brands;
    });
  }
}
