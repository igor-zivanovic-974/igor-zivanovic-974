import { Injectable } from '@angular/core';
import { Image } from '@app/core/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  mainSliderImages: Image[] = [
    {
      image: 'assets/images/b1-300.png',
      thumbImage: 'assets/images/b1-300.png',
      // title: 'PRODAJA, SERVIS I RENTIRANJE GRAĐEVINSKIH MAŠINA, ALATA I OPREME',
      link: ''
    },
    {
      image: 'assets/images/b2-300.png',
      thumbImage: 'assets/images/b2-300.png',
      // title: 'GRADITE SA NAMA LEPŠU BUDUĆNOST!',
      link: ''
    },
    {
      image: 'assets/images/b3-300.png',
      thumbImage: 'assets/images/b3-300.png',
      // title: 'POSETITE NAS U NAŠEM IZLOŽBENOM SALONU!',
      link: ''
    }
  ];

  brands: Image[] = [
    {
      image: 'assets/images/brands/somero.png',
      thumbImage: 'assets/images/brands/somero.png',
      title: '',
      alt: 'Somero Enterprises',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/terex.png',
      thumbImage: 'assets/images/brands/terex.png',
      title: '',
      alt: 'Terex Comedil',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/enar.png',
      thumbImage: 'assets/images/brands/enar.png',
      title: '',
      alt: 'Enar',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/maker.png',
      thumbImage: 'assets/images/brands/maker.png',
      title: '',
      alt: 'Maker',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/kapriol.png',
      thumbImage: 'assets/images/brands/kapriol.png',
      title: '',
      alt: 'Kapriol',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/frigerio.png',
      thumbImage: 'assets/images/brands/frigerio.png',
      title: '',
      alt: 'Frigerio',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/monolit.png',
      thumbImage: 'assets/images/brands/monolit.png',
      title: '',
      alt: 'Monolit',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/unimec.png',
      thumbImage: 'assets/images/brands/unimec.png',
      title: '',
      alt: 'Unimec',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/wacker.png',
      thumbImage: 'assets/images/brands/wacker.png',
      title: '',
      alt: 'Wacker Neuson',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/bosch.png',
      thumbImage: 'assets/images/brands/bosch.png',
      title: '',
      alt: 'Bosch',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/ferromet.png',
      thumbImage: 'assets/images/brands/ferromet.png',
      title: '',
      alt: 'Ferromet',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/sulzer.png',
      thumbImage: 'assets/images/brands/sulzer.png',
      title: '',
      alt: 'Sulzer',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/marshal.png',
      thumbImage: 'assets/images/brands/marshal.png',
      title: '',
      alt: 'Marshal Town',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/bragagnolo.png',
      thumbImage: 'assets/images/brands/bragagnolo.png',
      title: '',
      alt: 'Bragagnolo',
      link: 'partners'
    },
    {
      image: 'assets/images/brands/barikell.png',
      thumbImage: 'assets/images/brands/barikell.png',
      title: '',
      alt: 'Barikell',
      link: 'partners'
    }
  ];

  productImages: Image[] = [
    {
      image: 'assets/images/1.png',
      title: 'menu-subitem-1',
      link: 'products/1'
    },
    {
      image: 'assets/images/2.png',
      title: 'menu-subitem-2',
      link: 'products/2'
    },
    {
      image: 'assets/images/3.png',
      title: 'menu-subitem-3',
      link: 'products/3'
    },
    {
      image: 'assets/images/4.png',
      title: 'menu-subitem-4',
      link: 'products/4'
    },
    {
      image: 'assets/images/5.png',
      title: 'menu-subitem-5',
      link: 'products/5'
    },
    {
      image: 'assets/images/6.png',
      title: 'menu-subitem-6',
      link: 'products/6'
    },
    {
      image: 'assets/images/7.png',
      title: 'menu-subitem-7',
      link: 'products/7'
    },
    {
      image: 'assets/images/8.png',
      title: 'menu-subitem-8',
      link: 'products/8'
    },
    {
      image: 'assets/images/9.png',
      title: 'menu-subitem-9',
      link: 'products/9'
    },
    {
      image: 'assets/images/10.png',
      title: 'menu-subitem-10',
      link: 'products/10'
    },
    {
      image: 'assets/images/11.png',
      title: 'menu-subitem-11',
      link: 'products/11'
    },
    {
      image: 'assets/images/12.png',
      title: 'menu-subitem-12',
      link: 'products/12'
    }
  ];
  constructor() { }
}
