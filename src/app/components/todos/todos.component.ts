import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todos'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoServises : TodoService) { }

  ngOnInit(): void {
    this.todoServises.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo) {
    //Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoServises.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo){
    this.todoServises.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
