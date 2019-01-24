import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConst } from '../constants/app-const';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { MessageService } from './message.service';
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

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  sendCredentials(username: string, password: string): any{
    const url = `${this.servUrl}/api/login/token`;

    const encodedCredential = btoa(`${username}:${password}`);
    const basicHeader = 'Basic ' + encodedCredential;

    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': basicHeader
      })
    };
    return this.http.get(url, headersOptions).pipe(
      tap(_ => this.log('Send user credential of login...')),
      catchError(this.handleError('sendCredetials ', {}))
    );
  }

  checkSession(): any {
    const url = `${this.servUrl}/api/login/checkSession`;
    return this.http.get(url, this.httpOptions);
  }

  logout() {
    const url = `${this.servUrl}/api/login/user/logout`;
    return this.http.post(url, '', this.httpOptions);
  }

  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MOSF-messages:> LoginService: ${message}`);
  }
}
