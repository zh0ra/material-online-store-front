import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { UserPayment } from '../model/user-payment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentService {
  private servUrl: string = AppConst.servUrl;

  private httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: Http) { }

  newPayment(payment: UserPayment): any {
    const url = `${this.servUrl}/api/payment/add`;
    return this.http.post(url, JSON.stringify(payment), this.httpOptions);
  }

  getUserPaymentList(): any {
    const url = `${this.servUrl}/api/payment/getUserPaymentList`;
    return this.http.get(url, this.httpOptions);
  }

  removePayment(id: number): any {
    const url = `${this.servUrl}/api/payment/removePayment`;
    return this.http.post(url, id, this.httpOptions);
  }

  setDefaultPayment(id: number): any{
    const url = `${this.servUrl}/api/payment/setDefault`;
    return this.http.post(url, id, this.httpOptions);
  }
}
