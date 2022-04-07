import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //shows how to use the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //array we can have multiple
})
export class AppComponent {
  title = 'Todo List'; //will contain data and behaviour
  todo = [             //we create an array of objects
    {
      label: 'Bring Milk',
      done: false,
      priority:3}; //created an object and then indent it so that it is more readable
}
