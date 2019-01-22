import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../constants/app-const';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private servUrl = AppConst.servUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<Array<Category>> {
    const url = `${this.servUrl}/api/category/all`;
    return this.http.get<Array<Category>>(url, this.httpOptions);
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.servUrl}/api/category/${id}`;
    return this.http.get<Category>(url, this.httpOptions);
  }
}
