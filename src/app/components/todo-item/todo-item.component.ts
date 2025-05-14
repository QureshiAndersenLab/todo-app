import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos.service';
import { ButtonComponent } from '../button/button.component';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonComponent,
    DisplayErrorComponent,
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  errorMessage!: string;

  @Output() refetchTodos = new EventEmitter<void>();

  constructor(private _todoService: TodosService, private _router: Router) {}

  markComplete(): void {
    const newTodo = { ...this.todo, completed: !this.todo.completed };
    this._todoService
      .markComplete(newTodo)
      .subscribe((_) => this.refetchTodos.emit());
  }

  deleteTask(id: number): void {
    this._todoService.deleteTask(id).subscribe({
      next: (_) => this.refetchTodos.emit(),
      error: (err) => {
        console.error('Error deleting todos:', err);
        this.errorMessage = `Failed deleting ${this.todo.task}: ${err.body.error}`;
      },
    });
  }

  handleEdit(id: number): void {
    this._router.navigate(['/edit-todo', id]);
  }
}
