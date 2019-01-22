import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { UserPayment } from '../model/user-payment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentService {
  private servUrl: string = AppConst.servUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: HttpClient) { }

  newPayment(payment: UserPayment): Observable<UserPayment> {
    const url = `${this.servUrl}/api/payment/add`;
    return this.http.post<UserPayment>(url, JSON.stringify(payment), this.httpOptions);
  }

  getUserPaymentList(): Observable<Array<UserPayment>> {
    const url = `${this.servUrl}/api/payment/getUserPaymentList`;
    return this.http.get<Array<UserPayment>>(url, this.httpOptions);
  }

  removePayment(id: number): Observable<any> {
    const url = `${this.servUrl}/api/payment/removePayment`;
    return this.http.post<any>(url, id, this.httpOptions);
  }

  setDefaultPayment(id: number): Observable<any> {
    const url = `${this.servUrl}/api/payment/setDefault`;
    return this.http.post<any>(url, id, this.httpOptions);
  }
}
