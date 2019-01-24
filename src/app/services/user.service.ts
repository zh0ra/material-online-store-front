import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: Http) { }

  private servUrl = AppConst.servUrl;
  private httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })
  };

  checkSession(): any {
    throw new Error('Method not implemented.');
  }

  newUser(username: string, email: string, password: string, firstName: string, lastName: string
  ): any {
    const url = `${this.servUrl}/api/user/newUser`;
    const userInfo = {
      'username': username,
      'email': email,
      'firstName': firstName,
      'lastName': lastName,
      'password': password
    };
    return this.http.post(url, JSON.stringify(userInfo), this.httpOptions);
  }

  getCurrentUser(): any {
    const url = `${this.servUrl}/api/user/getCurrentUser`;
    return this.http.get(url, this.httpOptions);
  }

  retrivePassword(email: string): any {
    const url = `${this.servUrl}api/user/resetPassoword`;
    const userInfo = {
      'email': email
    };
    return this.http.post(url, JSON.stringify(userInfo), this.httpOptions);
  }

  updateUserInfo(user: User, password: string): any {
    const url = `${this.servUrl}/apo/user/updateUserInfo`;
    const updateUserInfo = {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'password': password,
      'username': user.username,
      'email': user.email
    };
    return this.http.post(url, JSON.stringify(updateUserInfo), this.httpOptions);
  }

  checkUsernameExists(username: string): any {
    const url = `${this.servUrl}/api/user/checkUsername/${username}`;
    return this.http.get(url, this.httpOptions);
  }

  checkEmailExists(email: string): any {
    const url = `${this.servUrl}/api/user/checkEmail/${email}`;
    return this.http.get(url, this.httpOptions);
  }
}
