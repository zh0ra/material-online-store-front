import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Product } from '../model/product.model';
import { AppConst } from '../constants/app-const';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    private serverPath = AppConst.servPath;

    private httpOptions = {
        headers: new Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    constructor(private http: Http) { }

    getProductList(): any {
        const allProductsUrl = this.serverPath + '/product/all';
        return this.http.get(allProductsUrl, this.httpOptions);
    }

    getProduct(id: number): any {
        const getProductUrl = this.serverPath + '/product/' + id;
        return this.http.get(getProductUrl, this.httpOptions);
    }

    searchProduct(keyword: string): any {
        const searchProductUrl = this.serverPath + '/product/searchProudct';
        return this.http.post(searchProductUrl, keyword, this.httpOptions);
    }
}
