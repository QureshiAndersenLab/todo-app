import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '@services/todos.service';
import { ButtonComponent } from '../button/button.component';
import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css',
})
export class TodoCreateComponent {
  todo: string = '';

  constructor(private _todosService: TodosService) {}

  @Output() todoCreated = new EventEmitter<void>();

  addTodo(): void {
    this.todo = this.todo.trim();
    if (!this.todo) return;

    const newTodo: Todo = { task: this.todo, completed: false } as Todo;

    this._todosService.addTodo(newTodo).subscribe((_) => {
      this.todo = '';
      this.todoCreated.emit();
    });
  }
}
