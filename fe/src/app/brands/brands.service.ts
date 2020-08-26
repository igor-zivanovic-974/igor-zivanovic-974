import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '@app/core/interfaces/brand';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from '@app/core/notifications.service';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';

const routes = {
  getBrands: () => '/suppliers/get-suppliers.php',
  getBrand: (id: number) => `/suppliers/get-supplier/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  env = environment.serverUrl;
  created = this.translate.get('service.notification.item.created');
  updated = this.translate.get('service.notification.item.updated');
  deleted = this.translate.get('service.notification.item.deleted');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin, Accept, X-Auth-Token, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, x-http-method-override',
      'Access-Control-Max-Age': '1728000'
    })
  };

  brands: Brand[] = [
    { id: 1, image: 'assets/images/brands/bosch.png', main: true },
    { id: 2, image: 'assets/images/brands/maker.png', main: true },
    { id: 3, image: 'assets/images/brands/somero.png', main: true },
    { id: 4, image: 'assets/images/brands/unimec.png', main: true },
    { id: 5, image: 'assets/images/brands/sulzer.png' },
    { id: 6, image: 'assets/images/brands/enar.png' },
    { id: 7, image: 'assets/images/brands/iori.png' },
    { id: 8, image: 'assets/images/brands/wacker.png' }
  ];

  breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: 'home', displayArrow: true },
    { name: 'Brands', link: 'brands', displayArrow: false }
  ];

  constructor(private http: HttpClient, private translate: TranslateService, private notifier: NotificationsService) { }

  getBrands(): Observable<Brand[]> {
    return this.http.get(routes.getBrands()).pipe(
      map((body: any) => body.items),
      catchError((err: any) => of(false))
    );
  }

  getBrand(id: any): Observable<Brand> {
    return this.http.get(routes.getBrand(id)).pipe(
      map((body: any) => body),
      catchError((err: any) => of(false))
    );
  }


}
