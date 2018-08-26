import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';
import { PeriodService } from '../services/period.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(
    private restService: RestService,
    private periodService: PeriodService,
    private cat: CategoryService
  ) { }

  ngOnInit() {
    this.restService.getEvents().subscribe(
      response => {
        response.forEach(element => {
          element.start_date = new Date (element.start_date);
          element.end_date = new Date (element.end_date);
        });
        this.events = response;

      },
      err => {
        console.log(err);
      }
    );
  }

}
