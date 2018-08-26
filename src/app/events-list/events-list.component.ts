import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';
import { PeriodService } from '../services/period.service';
import { CategoryService } from '../services/category.service';
import { GraphService } from '../services/graph.service';

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
    private cat: CategoryService,
    private graph: GraphService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.restService.getEvents()
    .subscribe(response => {
      console.log(response);
      response.forEach(element => {
        element.start_date = new Date (element.start_date);
        element.end_date = new Date (element.end_date);
      });
      this.events = response;
      }, err => console.log(err));
  }


  onAttendEvent(event_id) {
    this.graph.setEventAttend(event_id)
    .then(response => this.getEvents(),
    err => console.log(err)
    );
  }

  onMaybeEvent(event_id) {
    this.graph.setEventMaybe(event_id)
    .then(response => this.getEvents(),
    err => console.log(err)
    );
  }

  onDeclineEvent(event_id) {
    this.graph.setEventDeclined(event_id)
    .then(response => this.getEvents(),
    err => console.log(err)
    );
  }

}
