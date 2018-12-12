import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserShipping } from '../model/user-shipping.model';


@Injectable()
export class ShippingService {


    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        })
    };

    private serverPath: string = AppConst.servPath;
    private newShippingUrl = this.serverPath + '/shipping/add';
    private getUserShippingListUrl = this.serverPath + '/shipping/getUserShippingList';
    private removeUrl = this.serverPath + '/shipping/remove/';
    private setDefaultUrl = this.serverPath + '/shipping/setDefault';

    constructor(private http: HttpClient) { }

    newShipping(shipping: UserShipping): any {
        return this.http.post(this.newShippingUrl, JSON.stringify(shipping), this.httpOptions);
    }

    getUserShippingList(): any {
        return this.http.get(this.getUserShippingListUrl, this.httpOptions);
    }

    removeShipping(id: number): any {
        return this.http.post(this.removeUrl + id, this.httpOptions);
    }

    setDefaultShipping(id: number): any {
        return this.http.post(this.setDefaultUrl, id, this.httpOptions);
    }
}
