import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { GraphService } from '../services/graph.service';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

  events: any;

  constructor(
    private graph: GraphService,
    private user: UserService,
    private rest: RestService
  ) { }

  ngOnInit() {
    this.getMyEvents();
  }

  getMyEvents() {
    this.graph.getUserEvents(this.user.account.facebook_id)
    .then(userEvents => {
      this.rest.getEvents().subscribe(
        serverEvents => {
          this.events = [];
          for (let i = 0, len_u = userEvents.data.length; i < len_u; i++) {
            for (let j = 0, len_s = serverEvents.length; j < len_s; j++) {
              if (userEvents.data[i].id === serverEvents[j].facebook_id) {
                this.events.push(userEvents.data[i]);
              }
            }
          }
      }, err => console.log(err));
    });
  }

  onAttendEvent(event_id) {
    this.graph.setEventAttend(event_id)
    .then(response => this.getMyEvents(),
    err => console.log(err)
    );
  }

  onMaybeEvent(event_id) {
    this.graph.setEventMaybe(event_id)
    .then(response => this.getMyEvents(),
    err => console.log(err)
    );
  }

  onDeclineEvent(event_id) {
    this.graph.setEventDeclined(event_id)
    .then(response => this.getMyEvents(),
    err => console.log(err)
    );
  }

}
