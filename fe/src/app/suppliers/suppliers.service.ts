import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '@app/core/interfaces/supplier';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from '@app/core/notifications.service';

const routes = {
  suppliers: () => '/suppliers/get-suppliers.php',
  supplier: (id: number) => `/suppliers/get-supplier/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
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

  constructor(private http: HttpClient, private translate: TranslateService, private notifier: NotificationsService) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get(routes.suppliers()).pipe(
      map((body: any) => body.items),
      catchError((err: any) => of(false))
    );
  }

  getSupplier(id: any): Observable<Supplier> {
    return this.http.get(routes.supplier(id)).pipe(
      map((body: any) => body),
      catchError((err: any) => of(false))
    );
  }
}
