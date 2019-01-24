import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Product } from '../model/product.model';
import { AppConst } from '../constants/app-const';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    private servUrl = AppConst.servUrl;

    private httpOptions = {

        headers: new Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    constructor(private http: Http) { }

    getProductList(): any {
        const url = `${this.servUrl}/api/product/all`;
        return this.http.get(url, this.httpOptions);
    }

    getProduct(id: number): any {
        const url = `${this.servUrl}/api/product/all/${id}`;
        return this.http.get(url, this.httpOptions);
    }

    searchProduct(keyword: string): any {
        const url = `${this.servUrl}/api/product/all/${keyword}`;
        return this.http.post(url, keyword, this.httpOptions);
    }
}
