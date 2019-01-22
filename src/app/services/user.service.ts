import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../constants/app-const';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private servUrl = AppConst.servUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };
  checkSession(): any {
    throw new Error('Method not implemented.');
  }

  newUser(username: string, email: string, password: string, firstName: string, lastName: string
  ): Observable<User> {
    const url = `${this.servUrl}/api/user/newUser`;
    const userInfo = {
      'username': username,
      'email': email,
      'firstName': firstName,
      'lastName': lastName,
      'password': password
    };
    return this.http.post<User>(url, JSON.stringify(userInfo), this.httpOptions);
  }

  getCurrentUser(): Observable<User> {
    const url = `${this.servUrl}/api/user/getCurrentUser`;
    return this.http.get<User>(url, this.httpOptions);
  }

  retrivePassword(email: string): any {
    const url = `${this.servUrl}api/user/resetPassoword`;
    const userInfo = {
      'email': email
    };
    return this.http.post(url, JSON.stringify(userInfo), this.httpOptions);
  }

  updateUserInfo(user: User, password: string): Observable<User> {
    const url = `${this.servUrl}/apo/user/updateUserInfo`;
    const updateUserInfo = {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'password': password,
      'username': user.username,
      'email': user.email
    };
    return this.http.post<User>(url, JSON.stringify(updateUserInfo), this.httpOptions);
  }
}
