import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { Image } from '@app/core/interfaces/image';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  currentLanguage: string;
  mainSliderImages: Image[] = [];
  brands: Image[] = [];
  productImages: Image[] = [];
  @ViewChild('slider', { static: false }) slider: NgImageSliderComponent;
  @ViewChild('partners', { static: false }) partners: NgImageSliderComponent;
  imageSize = { width: '100%', height: '300', space: 0 };
  brandSize = { width: '150', height: '50', space: 6 };

  constructor(private _homeService: HomeService, private _router: Router, private translate: TranslateService) {
    translate.onLangChange.subscribe(() => {
      this.translate.get(['imageTitle1', 'imageTitle2', 'imageTitle3'])
        .subscribe(translations => {
          this.mainSliderImages[0].title = translations.imageTitle1;
          this.mainSliderImages[1].title = translations.imageTitle2;
          this.mainSliderImages[2].title = translations.imageTitle3;
        });
    })

  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.mainSliderImages = this._homeService.mainSliderImages;
    this.translate.get(['imageTitle1', 'imageTitle2', 'imageTitle3'])
      .subscribe(translations => {
        this.mainSliderImages[0].title = translations.imageTitle1;
        this.mainSliderImages[1].title = translations.imageTitle2;
        this.mainSliderImages[2].title = translations.imageTitle3;
      });
    this.brands = this._homeService.brands;
    this.productImages = this._homeService.productImages;
  }

  goTo(link: string) {
    this._router.navigate([link]);
  }

  onSliderImageClick(sliderImageIndex: any) {
    this.goTo(this.mainSliderImages[sliderImageIndex].link);
  }

  onBrandsImageClick(brandsImageIndex: any) {
    this.goTo(this.brands[brandsImageIndex].link);
  }
}
