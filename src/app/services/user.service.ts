import { Injectable } from '@angular/core';

import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import { Secrets } from '../../../_secrets';

import { RestService } from './rest.service';
import { GraphService } from './graph.service';

@Injectable()
export class UserService {

  public account = {
    loggedIn: false,
    name: '',
    picture: '',
    facebook_id: ''
  };

  constructor(
    private fb: FacebookService,
    private rest: RestService,
    private graph: GraphService
  ) {
    const initParams: InitParams = {
      appId: Secrets.appId,
      xfbml: true,
      version: 'v2.11',
      status: true
      };
      this.fb.init(initParams).then( () => {
        this.fb.getLoginStatus().then(response => {
          console.log(response);
          // console.log(document.cookie);
          if (response.status === 'connected') {
            this.rest.getToken(response.authResponse.accessToken)
            .subscribe(resp => {
              console.log(resp);
              const promises = [];
              promises.push(this.graph.getName()
              .then(
                name => this.account.name = name,
                err => Promise.reject(err)
              ));
              promises.push(this.graph.getPicture()
              .then(
                picture => this.account.picture = picture,
                err => Promise.reject(err)
              ));
              Promise.all(promises).then(
                () => {
                  this.account.facebook_id = response.authResponse.userID;
                  this.rest.setToken(resp);
                  this.rest.getMe().subscribe(rest_me => { console.log(rest_me); });
                  this.account.loggedIn = true;
                },
                (err) => console.log(err)
              );
            },
            err => {
              console.log(err);
            }
            );
          } else {
            this.account.loggedIn = false;
          }
        });
      });
  }

  login(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log(response);
        console.log(document.cookie);
        this.account.loggedIn = true;
      })
      .catch((error: any) => console.error(error));
  }

  logout(): void {
    console.log(document.cookie);
    //
    this.fb.logout().then(() => {
      console.log('Logged out!');
      this.deleteCookie('fblo_' + Secrets.appId); // fblo_yourFBAppId. example: fblo_444499089231295
      this.deleteCookie('fbsr_' + Secrets.appId); // fblo_yourFBAppId. example: fblo_444499089231295
      localStorage.clear();
      this.account.loggedIn = false;
      console.log(document.cookie);
    });
  }


  deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

}
