import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../constants/app-const';
import { Category } from '../model/category.model';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private serverPath = AppConst.servPath;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: HttpClient) { }


  getCategoryList(): Observable<any> {
    const allCategoryUrl = this.serverPath + '/category/all';
    return this.http.get(allCategoryUrl, this.httpOptions);
  }

  getCategory(id: number): Observable<any> {
    const getCategoryUrl = this.serverPath + '/category/' + id;
    return this.http.get<Category>(getCategoryUrl, this.httpOptions);
  }
}
