import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private user: UserService,
    private cat: CategoryService
  ) { }

  ngOnInit() {
  }

  onLogin () {
    this.user.login();
  }

  onLogout () {
    this.user.logout();
  }




}
