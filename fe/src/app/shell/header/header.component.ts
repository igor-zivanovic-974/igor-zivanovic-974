import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService, I18nService } from '@app/core';
import { HeaderService } from './header.service';
import { MenuItem } from '@app/core/interfaces/menuItem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  langs: string[];
  isLoggedIn: boolean;
  menuItems: MenuItem[];
  searchValue: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private _headerService: HeaderService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.setOtherLangs();
    this.getMenuItems();
    console.log(this.menuItems);
    this.isLoggedIn = this.username ? true : false;
  }

  setOtherLangs() {
    this.langs = this.languages.filter(l => l !== this.currentLanguage);
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
    this.setOtherLangs();
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }

  logout() {
    this.isLoggedIn = false;
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/home'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  getMenuItems() {
    this.menuItems = this._headerService.menuItems;
  }

  search() {
    alert('search: ' + this.searchValue);
    this.searchValue = '';
  }
}
