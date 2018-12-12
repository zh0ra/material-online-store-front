import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: Http) { }

  private serverPath = AppConst.servPath;
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
    const newUserUrl = this.serverPath + '/user/newUser';

    const userInfo = {
      'username': username,
      'email': email,
      'firstName': firstName,
      'lastName': lastName,
      'password': password
    };
    return this.http.post(newUserUrl, JSON.stringify(userInfo), this.httpOptions);
  }

  getCurrentUser(): any {
    const currentUserUrl = this.serverPath + '/user/getCurrentUser';
    return this.http.get(currentUserUrl, this.httpOptions);
  }

  retrivePassword(email: string): any {
    const newUserUrl = this.serverPath + '/user/resetPassword';
    const userInfo = {
      'email': email
    };
    return this.http.post(newUserUrl, JSON.stringify(userInfo), this.httpOptions);
  }

  updateUserInfo(user: User, password: string) {
    const updateUserUrl = this.serverPath + '/user/updateUserInfo';
    const updateUserInfo = {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'password': password,
      'username': user.username,
      'email': user.email
    };
    return this.http.post(updateUserUrl, JSON.stringify(updateUserInfo), this.httpOptions);
  }
}
