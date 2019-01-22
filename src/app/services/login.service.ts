import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../constants/app-const';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private servUrl = AppConst.servUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  constructor(private http: HttpClient) { }

  sendCredentials(username: string, password: string) {
    const url = `${this.servUrl}/api/login/token`;

    const encodedCredential = btoa(`${username}:${password}`);
    const basicHeader = 'Basic ' + encodedCredential;

    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': basicHeader
      })
    };
    return this.http.get(url, headersOptions);
  }

  checkSession(): any {
    const url = `${this.servUrl}/api/login/checkSession`;
    return this.http.get(url, this.httpOptions);
  }

  logout() {
    const url = `${this.servUrl}/api/login/user/logout`;
    return this.http.post(url, '', this.httpOptions);
  }
}
