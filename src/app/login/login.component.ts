import { Component, OnInit } from '@angular/core';

import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '326453164536669',
      xfbml: true,
      version: 'v2.11'
    };
    fb.init(initParams);
   }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }

}
