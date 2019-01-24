import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private servUrl = AppConst.servUrl;
  private httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: Http) { }

  getCategoryList(): any {
    const url = `${this.servUrl}/api/category/all`;
    return this.http.get(url, this.httpOptions);
  }

  getCategory(id: number): any {
    const url = `${this.servUrl}/api/category/${id}`;
    return this.http.get(url, this.httpOptions);
  }
}
