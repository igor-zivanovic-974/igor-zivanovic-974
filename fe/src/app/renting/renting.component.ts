import { Component, OnInit } from '@angular/core';
import { RentingService } from './renting.service';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { Item } from '@app/core/interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.scss']
})
export class RentingComponent implements OnInit {
  items: Item[] = [];
  breadcrumbs: Breadcrumb[] = [];

  constructor(private _rentingService: RentingService, private _router: Router) { }

  ngOnInit() {
    this.items = this._rentingService.items;
    this.breadcrumbs = this._rentingService.breadcrumbs;
  }

  goTo(link: string) {
    this._router.navigate([link]);
  }
}
