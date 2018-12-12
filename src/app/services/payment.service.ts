import {Injectable} from '@angular/core';
import { AppConst } from '../constants/app-const';
import { UserPayment } from '../model/user-payment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PaymentService {
  private serverPath: string = AppConst.servPath;

  private newPaymentUrl = this.serverPath + '/payment/add';
  private getUserPaymentListUrl = this.serverPath + '/payment/getUserPaymentList';
  private removePaymentUrl = this.serverPath + '/payment/removePayment';
  private setDefaultPaymentUrl = this.serverPath + '/payment/setDefault';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: HttpClient) {}

  newPayment(payment: UserPayment): any {
    return this.http.post(this.newPaymentUrl, JSON.stringify(payment), this.httpOptions);
  }

  getUserPaymentList(): any {
    return this.http.get(this.getUserPaymentListUrl, this.httpOptions);
  }

  removePayment(id: number): any {
    return this.http.post(this.removePaymentUrl, id, this.httpOptions);
  }

  setDefaultPayment(id: number): any {
    return this.http.post(this.setDefaultPaymentUrl, id, this.httpOptions);
  }
}
