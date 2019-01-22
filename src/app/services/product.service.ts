import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { AppConst } from '../constants/app-const';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    private servUrl = AppConst.servUrl;

    private httpOptions = {

        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    constructor(private http: HttpClient) { }

    getProductList(): Observable<Product[]> {
        const url = `${this.servUrl}/api/product/all`;
        return this.http.get<Product[]>(url, this.httpOptions);
    }

    getProduct(id: number): Observable<Product> {
        const url = `${this.servUrl}/api/product/all/${id}`;
        return this.http.get<Product>(url, this.httpOptions);
    }

    searchProduct(keyword: string): Observable<Product> {
        const url = `${this.servUrl}/api/product/all/${keyword}`;
        return this.http.post<Product>(url, keyword, this.httpOptions);
    }
}
