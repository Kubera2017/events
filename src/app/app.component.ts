import { Component, OnInit, ViewChild } from '@angular/core';

import { PeriodService } from './services/period.service';

import { TRANSLATION } from './models/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('picker') picker;
  minDate = new Date();

  translation: any;

  selectedDate: any;

  constructor(
    private periodService: PeriodService) { }

  ngOnInit() {
    this.translation = TRANSLATION;
  }

  toggle() {
    this.picker.open();
  }

  setToday() {
    this.periodService.setToday();
    this.selectedDate = undefined;
  }

  setTomorrow() {
    this.periodService.setTomorrow();
    this.selectedDate = undefined;
  }

  setThisWeek() {
    this.periodService.setThisWeek();
    this.selectedDate = undefined;
  }

  setNextWeek() {
    this.periodService.setNextWeek();
    this.selectedDate = undefined;
  }

  setThisMonth() {
    this.periodService.setThisMonth();
    this.selectedDate = undefined;
  }

  setDate(e) {
    this.periodService.setDate(e.value);
  }

  setAll() {
    this.periodService.setAll();
    this.selectedDate = undefined;
  }

}
