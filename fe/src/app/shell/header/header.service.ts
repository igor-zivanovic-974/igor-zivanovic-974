import { MenuItem } from '@app/core/interfaces/menuItem';

export class HeaderService {
  menuItems: MenuItem[] = [
    {
      name: 'Products',
      link: '/products',
      isDropdown: true,
      values: [
        { name: 'menu-subitem-1', link: '/products/1' },
        { name: 'menu-subitem-2', link: '/products/2' },
        { name: 'menu-subitem-3', link: '/products/3' },
        { name: 'menu-subitem-4', link: '/products/4' },
        { name: 'menu-subitem-5', link: '/products/5' },
        { name: 'menu-subitem-6', link: '/products/6' },
        { name: 'menu-subitem-7', link: '/products/7' },
        { name: 'menu-subitem-8', link: '/products/8' },
        { name: 'menu-subitem-9', link: '/products/9' },
        { name: 'menu-subitem-10', link: '/products/10' },
        { name: 'menu-subitem-11', link: '/products/11' },
        { name: 'menu-subitem-12', link: '/products/12' }
      ]
    },
    { name: 'Used', link: '/used' },
    { name: 'Renting', link: '/renting' },
    { name: 'Partners', link: '/partners' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];
}
