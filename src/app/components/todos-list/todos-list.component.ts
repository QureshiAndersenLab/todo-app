import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { TodosService } from '@services/todos.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '@components/todo-item/todo-item.component';
import { Todo } from '@models/todo.model';
import { DisplayErrorComponent } from '@components/display-error/display-error.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, DisplayErrorComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit {
  todos!: Todo[];

  errorMessage?: string;

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this._todosService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.errorMessage = `Failed to load todos: ${err.body.error}`;
      },
    });
  }
}
