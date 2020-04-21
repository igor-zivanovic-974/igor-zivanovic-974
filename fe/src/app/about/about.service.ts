import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '@app/core/models/product';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from '@app/core/notifications.service';

const routes = {
  getProduct: (id: any) => `/products/get-product.php?id=${id}`,
  getProducts: () => `/products/get-products.php`
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {
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

  constructor(
    private httpClient: HttpClient,
    private translate: TranslateService,
    private notifier: NotificationsService
  ) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get(routes.getProducts()).pipe(
      map((body: any) => body.items),
      catchError(() => of(false))
    );
  }

  getProduct(id: any): Observable<any> {
    return this.httpClient.get(routes.getProduct(id)).pipe(
      map((body: any) => body),
      catchError(() => of(false))
    );
  }
}
