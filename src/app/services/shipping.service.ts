import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { Http, Headers } from '@angular/http';
import { UserShipping } from '../model/user-shipping.model';
import { Observable } from 'rxjs';


@Injectable()
export class ShippingService {

    private httpOptions = {
        headers: new Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    private servUrl: string = AppConst.servUrl;

    constructor(private http: Http) { }

    newShipping(shipping: UserShipping): any{
        const url = `${this.servUrl}/api/shipping/add`;
        return this.http.post(url, JSON.stringify(shipping), this.httpOptions);
    }

    getUserShippingList(): any {
        const url = `${this.servUrl}/api/shipping/getUserShippingList`;
        return this.http.get(url, this.httpOptions);
    }

    removeShipping(id: number): any {
        const url = `${this.servUrl}/api/shipping/remove/${id}`;
        return this.http.post(url, this.httpOptions);
    }

    setDefaultShipping(id: number): any {
        const url = `${this.servUrl}/api/shipping/setDefault`;
        return this.http.post(url, id, this.httpOptions);
    }
}
