import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { ApiResponse } from '@app/models/apiResponse';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}
  public getUsers(
    role: string,
    search: string
  ): Observable<ApiResponse<User[]>> {
    let params = new HttpParams();
    let url = `users/${role}`;
    if (search) {
      params = params.set('search', search);
    }
    return this._httpClient.get<ApiResponse<User[]>>(url, {
      params,
    });
  }
}
