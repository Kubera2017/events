import { Injectable } from '@angular/core';

import { FacebookService } from 'ngx-facebook';

@Injectable()
export class GraphService {

  constructor(
    private fb: FacebookService
  ) { }

  getName (): Promise<any> {
    return new Promise ((resolve, reject) => {
      const path = '/me';
      this.fb.api(path, 'get').then( response => {
        resolve(response.name);
      },
      err => {
        reject(err);
      }
      );
    });
  }

  getPicture (): Promise<any> {
    return new Promise ((resolve, reject) => {
      const path = '/me?fields=picture.type(normal)';
      this.fb.api(path, 'get').then( response => {
        console.log(response);
        resolve(response.picture.data.url);
      },
      err => {
        reject(err);
      }
      );
    });
  }

  setEventMaybe (event_id: string): Promise<Boolean> {
    return new Promise ((resolve, reject) => {
      const path = `/${event_id}/maybe`;
      console.log(path);
      this.fb.api(path, 'post').then( response => {
        console.log(response);
        resolve(true);
      },
      err => {
        console.log(err);
        reject(false);
      }
      );
    });
  }

  setEventAttend (event_id: string): Promise<Boolean> {
    return new Promise ((resolve, reject) => {
      const path = `/${event_id}/attending`;
      console.log(path);
      this.fb.api(path, 'post').then( response => {
        console.log(response);
        resolve(true);
      },
      err => {
        console.log(err);
        reject(false);
      }
      );
    });
  }

  setEventDeclined (event_id: string): Promise<Boolean> {
    return new Promise ((resolve, reject) => {
      const path = `/${event_id}/declined`;
      console.log(path);
      this.fb.api(path, 'post').then( response => {
        console.log(response);
        resolve(true);
      },
      err => {
        console.log(err);
        reject(false);
      }
      );
    });
  }

  getUserEvents (facebook_id: string): Promise<any> {
    return new Promise ((resolve, reject) => {
      const path = `/${facebook_id}/events`;
      console.log(path);
      this.fb.api(path, 'get').then( response => {
        console.log(response);
        resolve(response);
      },
      err => {
        console.log(err);
        reject(err);
      }
      );
    });
  }

}
