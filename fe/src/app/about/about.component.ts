import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { AboutService } from './about.service';
import { Product } from '@app/core/interfaces/product';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  products: Product[] = [];
  breadcrumbs: Breadcrumb[] = [];

  constructor(private service: AboutService) { }

  ngOnInit() {
    this.getProducts();
    this.breadcrumbs = this.service.breadcrumbs;
  }

  getProducts() {
    this.service.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log('products', this.products);
    });
  }
}
