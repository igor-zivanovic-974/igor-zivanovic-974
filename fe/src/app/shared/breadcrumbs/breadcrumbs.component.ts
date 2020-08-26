import { Component, OnInit, Input } from '@angular/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs: Breadcrumb[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.breadcrumbs);
    }, 1000);
  }

  goTo(link: string) {
    this._router.navigate([link]);
  }

}
