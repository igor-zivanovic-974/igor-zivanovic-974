import { Injectable } from '@angular/core';
import { Breadcrumb } from '@app/core/interfaces/breadcrumb';
import { Product } from '@app/core/interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from '@app/core/notifications.service';
import { Group } from '@app/core/models/group';
import { Category } from '@app/core/interfaces/category';
import { Subcategory } from '@app/core/interfaces/subcategory';

export interface IdName {
  id: number | string;
  name: string;
  categoryId?: number;
  subcategoryId?: number;
}

export class ResponseItems {
  items: IdName[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: 'home', displayArrow: true },
    { name: 'Products', link: 'products', displayArrow: false }
  ];
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

  constructor(private _http: HttpClient, private translate: TranslateService, private notifier: NotificationsService) { }

  getGroups(): Observable<Group[]> {
    return this._http.get(environment.serverUrl + '/helpers/get-groups').pipe(
      map((res: ResponseItems) => {
        return res.items as Group[];
      }),
      catchError((err: any) => {
        return throwError(err.message);
      })
    );
  }

  getCategories(): Observable<Category[]> {
    return this._http.get(environment.serverUrl + '/helpers/get-categories').pipe(
      map((res: ResponseItems) => {
        return res.items as Category[];
      }),
      catchError((err: any) => {
        return throwError(err.message);
      })
    );
  }

  getSubcategories(): Observable<Subcategory[]> {
    return this._http.get(environment.serverUrl + '/helpers/get-subcategories').pipe(
      map((res: ResponseItems) => {
        return res.items as Subcategory[];
      }),
      catchError((err: any) => {
        return throwError(err.message);
      })
    );
  }

  getProducts(subcategoryId: number): Observable<Product[]> {
    return this._http.get(`${environment.serverUrl}/products/get-products-by-subcategory?id=${subcategoryId}`).pipe(
      map((res: ResponseItems) => {
        return res.items as Product[];
      }),
      catchError((err: any) => {
        return throwError(err.message);
      })
    );
  }

}
