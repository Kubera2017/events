import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  @Input() event: any;
  @Output() AttendClick = new EventEmitter<string>();
  @Output() MaybeClick = new EventEmitter<string>();
  @Output() DeclineClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAttend() {
    this.AttendClick.emit(this.event.id);
  }

  onMaybe() {
    this.MaybeClick.emit(this.event.id);
  }

  onDecline() {
    this.DeclineClick.emit(this.event.id);
  }

}
