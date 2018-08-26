import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

@Injectable()
export class CategoryService {

  categories: any;
  selected_categories = [];

  constructor(
    private rest: RestService
  ) {
    this.rest.getCategories()
    .subscribe(resp => {
      this.categories = resp;
      this.categories.forEach(element => {
        this.selected_categories.push(element);
      });
    },
    err => {
      console.log(err);
    });
  }

  choose(id: string) {
    for (let i = 0; i < this.selected_categories.length; i++) {
      if (this.selected_categories[i].id === id) {
        this.selected_categories.splice(i, 1);
        this.selected_categories = this.selected_categories.slice();
        return;
      }
    }

    this.categories.filter(category => {
      if (category.id === id) {
        this.selected_categories.push(category);
      }
    });
  }

  isSelected(id: string): boolean {
    let selected = false;

    for (let i = 0; i < this.selected_categories.length; i++) {
        if (this.selected_categories[i].id === id) {
          selected = true;
          break;
        }
    }

    return selected;

  }

  isInSelected(ids: any): boolean {
    let selected = false;
    for (let i = 0; i < ids.length; i++) {
      if (selected) { break; }
      for (let j = 0; j < this.selected_categories.length; j++) {
        if (this.selected_categories[j].id === ids[i].id) {
          selected = true;
          break;
        }
      }
    }
    return selected;
  }



}
