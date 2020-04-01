import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '@app/core/models/product';

const routes = {
  getProduct: (id: any) => `/products/get-product.php?id=${id}`,
  getProducts: () => `http://bepro.test/api/products/get-products.php`
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get(routes.getProducts()).pipe(
      map((body: any) => body.records),
      catchError(() => of('Error, could not load joke :-('))
    );
  }

  getProduct(id: any): Observable<any> {
    return this.httpClient.get(routes.getProduct(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
