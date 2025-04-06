import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/models/apiResponse';
import { Product } from '@app/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}
  public getProducts(search: string): Observable<ApiResponse<Product[]>> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    return this._httpClient.get<ApiResponse<Product[]>>('products', { params });
  }
}
