import { Component, OnInit } from '@angular/core';
import { SuppliersService } from './suppliers.service';
import { Supplier } from '@app/core/interfaces/supplier';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(private service: SuppliersService, private translate: TranslateService) {}

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.service.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    });
  }
}
