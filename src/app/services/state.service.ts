import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  public mode: any;

  previous: any;

  constructor() {
    this.setListView();
   }

  setListView() {
    this.mode = 'list';
  }

  setMapView() {
    this.mode = 'map';
  }

  setEventView() {
    this.previous = this.mode;
    this.mode = 'event';
  }

  back() {
    this.mode = this.previous;
  }

}
