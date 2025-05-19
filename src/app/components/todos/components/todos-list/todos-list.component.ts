import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '@services/todos.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '@models/todo.model';
import { DisplayErrorComponent } from '@components/display-error/display-error.component';
import { FlexContainerComponent } from '../../../flex-container/flex-container.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent,
    DisplayErrorComponent,
    FlexContainerComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit, OnDestroy {
  todos!: Todo[];
  errorMessage?: string;
  private subscription = new Subscription();

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();

    this.subscription.add(
      this._todosService.todosUpdated$.subscribe(() => {
        this.getTodos();
      })
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
