import { Component, ContentChild, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo : string;

  constructor() { }

  ngOnInit(): void {
   
  }

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.content = this.newTodo;
      todo.completed = true;
      this.todos.push(todo);
      this.newTodo = " ";

    } else{
      alert('Please, enter some Todo');
    }
  }

  doneTodo(id:number){
    this.todos[id].completed = !this.todos[id].completed;
  }

  removeTodo(id:number){
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
