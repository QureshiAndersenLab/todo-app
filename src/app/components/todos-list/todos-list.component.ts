import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TodosService } from '@services/todos.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '@components/todo-item/todo-item.component';
import { Todo } from '@models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit {
  todos!: Todo[];

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this._todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
