import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: '9-11 AM: Studying ', done: true },
    { description: '1-4  PM: Playing ', done: true },
   
   
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

}