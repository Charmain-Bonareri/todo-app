import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //shows how to use the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //array we can have multiple
})
export class AppComponent {
  title = 'Todo List'; //will contain data and behavior //
  todos = [             //we create an array of objects  //created an object and then indent it so that it is more readable
    {
      label: 'Bring Milk',
      done: false,
      priority:3
    },
    {
      label: 'Pay Wifi Bill',
      done: false,
      priority:1
    },
    {
      label: 'Clean house',
      done: false,
      priority:4
    },
    {
      label: 'Fix the bulb',
      done: false,
      priority:5
    }
  ];
}
