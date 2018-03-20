import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionServiceService {
  private defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private defaultOptions: RequestOptions = new RequestOptions({
    headers: this.defaultHeaders,
    withCredentials: true,
  });

  constructor(private http:Http) { }

  doLogin(user):Observable<any> {
      return this.http.post('http://localhost:3000/session', JSON.stringify(user), this.defaultOptions)
        .map(res => res.json())
  }
}
