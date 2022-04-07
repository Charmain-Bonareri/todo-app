import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //shows how to use the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //array we can have multiple
})
export class AppComponent {
  title = '-  To-do List  -'; //will contain data and behavior //
  todos = [             //we create an array of objects  //created an object and then indent it so that it is more readable
    {
      label: 'Bring Milk',
      done: false,
      priority:3
    },
    {
      label: 'Go and register new Safaricom line before deadline',
      done: true,
      priority:1
    },
    {
      label: 'Call Titus to find out about the money he owes you, remind him the interest accrued',
      done: true,
      priority:1
    },
    {
      label: 'Pay Wifi Bill',
      done: true,
      priority:1
    },
    {
      label: 'Feed the Chicken',
      done: false,
      priority:5
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
    },
    {
      label: 'Cook lunch for kids',
      done: true,
      priority:2
    }
  ];

  addTodo(newTodoLabel){
   var newTodo = {
    label : newTodoLabel,
    priority : 1,
    done : false
   };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t=> t.label !== todo.label);
  }
}


