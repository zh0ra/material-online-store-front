import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private serverPath = AppConst.servPath;
  private httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: Http) { }


  getAllCategory(): any {
    const allCategoryUrl = this.serverPath + '/category/all';
    return this.http.get(allCategoryUrl, this.httpOptions);
  }

  getCategory(id: number): any {
    const getCategoryUrl = this.serverPath + '/category/' + id;
    return this.http.get(getCategoryUrl, this.httpOptions);
  }
}
