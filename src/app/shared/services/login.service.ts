import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './../models/user.model';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class LoginService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly SESSION_API = `${ LoginService.BASE_API }/session`;
  private static defaultHeaders: Headers = new Headers({'Content-Type': 'application/json'});
  private static defaultOptions: RequestOptions = new RequestOptions({headers: LoginService.defaultHeaders });

  user: User;

  constructor(private http: Http) { }

  login(user: User): Observable<User> {
    return this.http.post(LoginService.SESSION_API, JSON.stringify(user), LoginService.defaultOptions)
      .map( res => {
        return this.doLogin(res.json());
      })
      .catch(error => this.handleError(error));
  }

  private doLogin(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));

    return this.user;
  }

  private handleError(error: Response | any): Observable<any> {
    if(!environment.production){
      console.error(`Login Service error: ${error.json()}`);
    }

    return Observable.throw(error.json());
  }
}
