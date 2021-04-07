import { Component,Input,EventEmitter,Output , OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from  '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo : Todo;
@Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    //toggle in UI
    todo.completed = !todo.completed;
    //Toggle in server
    this.todoService.toggleCompleted(todo).subscribe( todo => console.log(todo));

  }
  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }
}
