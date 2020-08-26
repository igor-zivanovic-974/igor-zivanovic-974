import { Injectable } from '@angular/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: 'home', displayArrow: true },
    { name: 'Contact', link: 'contact', displayArrow: false }
  ];

  constructor() { }
}
