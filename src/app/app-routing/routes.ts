import { Routes } from '@angular/router';

import { EventsListComponent } from '../events-list/events-list.component';
import { TermsComponent } from '../terms/terms.component';
import { MyEventsComponent } from '../my-events/my-events.component';

export const routes: Routes = [
  { path: 'list',  component: EventsListComponent },
  { path: 'terms',  component: TermsComponent },
  { path: 'myevents',  component: MyEventsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
