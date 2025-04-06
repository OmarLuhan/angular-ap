import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/models/apiResponse';
import { Category } from '@app/models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _httpClient: HttpClient) {}
  public getCategories(search: string): Observable<ApiResponse<Category[]>> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    return this._httpClient.get<ApiResponse<Category[]>>('categories', {
      params,
    });
  }
}
