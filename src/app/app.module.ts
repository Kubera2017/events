import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { FacebookModule } from 'ngx-facebook';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeHe from '@angular/common/locales/he';
registerLocaleData(localeHe, 'he');

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { RestService } from './services/rest.service';
import { PeriodService } from './services/period.service';

import { LoginComponent } from './login/login.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { StateService } from './services/state.service';
import { EventsListComponent } from './events-list/events-list.component';
import { UserService } from './services/user.service';
import { GraphService } from './services/graph.service';
import { CategoryService } from './services/category.service';
import { TermsComponent } from './terms/terms.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    StatusBarComponent,
    EventsListComponent,
    TermsComponent,
    MyEventsComponent,
    EventListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    RestService,
    PeriodService,
    StateService,
    UserService,
    GraphService,
    CategoryService,
    {provide: LOCALE_ID, useValue: 'he'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
