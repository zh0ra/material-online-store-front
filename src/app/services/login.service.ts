import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

private severPath = AppConst.servPath;


  constructor(private http: Http) {}

  sendCredentials(username: string, password: string) {
    const url = this.severPath + '/login/token';
    const encodedCredential = btoa(username + ':' + password);
    const basicHeader = 'Basic ' + encodedCredential;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    return this.http.get(url, { headers: headers });
  }

  checkSession(): any {
    const checkSessionUrl = this.severPath + '/login/checkSession';
    const headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(checkSessionUrl, {headers : headers});
  }

  logout() {
    const url = this.severPath + '/login/user/logout';
    const headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, '', {headers : headers});
  }
}
