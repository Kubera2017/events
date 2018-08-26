import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Settings } from '../settings';

import { Secrets } from '../../../_secrets';

@Injectable()
export class RestService {

  private api = Settings.apiUrl;

  public token: any;

  constructor(private http: HttpClient) { }

  public getToken(facebookToken: string): Observable<any> {
    const url = this.api + `/auth/convert-token?grant_type=convert_token`
    + `&backend=facebook&client_id=${Secrets.client_id}`
    + `&client_secret=${Secrets.client_secret}`
    + `&token=${facebookToken}`;
    return this.http
    .post(url, {});
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getEvents(): Observable<any> {
    const url = this.api + `/event/`;
    return this.http
    .get(url);
  }

  public getCategories(): Observable<any> {
    const url = this.api + `/category`;
    return this.http
    .get(url);
  }

  public getMe(): Observable<any> {
    const url = this.api + `/me?access_token=${this.token.access_token}`;
    return this.http
    .get(url);
  }

}
