import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserShipping } from '../model/user-shipping.model';
import { Observable } from 'rxjs';


@Injectable()
export class ShippingService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    private servUrl: string = AppConst.servUrl;

    constructor(private http: HttpClient) { }

    newShipping(shipping: UserShipping): Observable<UserShipping> {
        const url = `${this.servUrl}/api/shipping/add`;
        return this.http.post<UserShipping>(url, JSON.stringify(shipping), this.httpOptions);
    }

    getUserShippingList(): Observable<Array<UserShipping>> {
        const url = `${this.servUrl}/api/shipping/getUserShippingList`;
        return this.http.get<Array<UserShipping>>(url, this.httpOptions);
    }

    removeShipping(id: number): Observable<any> {
        const url = `${this.servUrl}/api/shipping/remove/${id}`;
        return this.http.post<any>(url, this.httpOptions);
    }

    setDefaultShipping(id: number): Observable<any> {
        const url = `${this.servUrl}/api/shipping/setDefault`;
        return this.http.post<any>(url, id, this.httpOptions);
    }
}
