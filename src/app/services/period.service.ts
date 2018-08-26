import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class PeriodService {

  public mode: any;
  public period = {
    start: new Date(),
    end: new Date()
  };

  offset = 2; // IST


  constructor() {
    this.setToday();
   }

  setToday() {
    this.mode = 'today';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    this.period.start = now.toDate();
    this.period.end = now.endOf('day').toDate();
  }

  setTomorrow() {
    this.mode = 'tomorrow';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    now.add(1, 'days');
    this.period.start = now.startOf('day').toDate();
    this.period.end = now.endOf('day').toDate();
  }

  setThisWeek() {
    this.mode = 'thisWeek';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    this.period.start = now.toDate();
    this.period.end = now.endOf('week').toDate();
  }

  setNextWeek() {
    this.mode = 'nextWeek';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    now.add(1, 'weeks');
    this.period.start = now.startOf('week').toDate();
    this.period.end = now.endOf('week').toDate();
  }

  setThisMonth() {
    this.mode = 'thisMonth';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    this.period.start = now.toDate();
    this.period.end = now.endOf('month').toDate();
  }

  setDate(date: any) {
    this.mode = 'date';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    if (now.date() === date.date() && now.month() === date.month() && now.year() === date.year()) {
      this.period.start = now.toDate();
      this.period.end = now.endOf('day').toDate();
    } else {
      now.date(date.date());
      now.month(date.month());
      now.year(date.year());
      this.period.start = now.startOf('day').toDate();
      this.period.end = now.endOf('day').toDate();
    }

  }

  setAll() {
    this.mode = 'all';
    const now = moment();
    now.locale('he');
    now.utcOffset(this.offset * 60);
    this.period.start = now.toDate();
    // this.period.start = new Date(2009, 0);
    this.period.end = new Date(2099, 0);
  }

}
