import { Injectable } from '@angular/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { Item } from '@app/core/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class UsedService {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: 'home', displayArrow: true },
    { name: 'Used', link: 'used', displayArrow: false }
  ];
  items: Item[] = [
    {
      image: 'assets/images/1.png',
      title: 'Item 1',
      id: 1,
      text: 'text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum maxime ducimus porro voluptate laboriosam distinctio quasi. Nesciunt, odio. Maiores rem veniam dicta omnis exercitationem dolor ratione incidunt'
    },
    {
      image: 'assets/images/2.png',
      title: 'Item 2',
      id: 2,
      text: 'text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum maxime ducimus porro voluptate laboriosam distinctio quasi. Nesciunt, odio. Maiores rem veniam dicta omnis exercitationem dolor ratione incidunt'
    },
    {
      image: 'assets/images/2.png',
      title: 'Item 3',
      id: 3,
      text: 'text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum maxime ducimus porro voluptate laboriosam distinctio quasi. Nesciunt, odio. Maiores rem veniam dicta omnis exercitationem dolor ratione incidunt'
    },
    {
      image: 'assets/images/4.png',
      title: 'Item 4',
      id: 4,
      text: 'text 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum maxime ducimus porro voluptate laboriosam distinctio quasi. Nesciunt, odio. Maiores rem veniam dicta omnis exercitationem dolor ratione incidunt'
    }
  ];
  constructor() { }
}
