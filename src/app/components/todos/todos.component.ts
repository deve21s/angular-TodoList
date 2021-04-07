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

}
