import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { UsedService } from './used.service';
import { Item } from '@app/core/interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-used',
  templateUrl: './used.component.html',
  styleUrls: ['./used.component.scss']
})
export class UsedComponent implements OnInit {
  items: Item[] = [];
  breadcrumbs: Breadcrumb[] = [];

  constructor(private _usedService: UsedService, private _router: Router) { }

  ngOnInit() {
    this.items = this._usedService.items;
    this.breadcrumbs = this._usedService.breadcrumbs;
  }

  goTo(link: string) {
    this._router.navigate([link]);
  }
}
