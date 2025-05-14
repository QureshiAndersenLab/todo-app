import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '@services/todos.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css',
})
export class TodoCreateComponent {
  todo: string = '';

  constructor(private todosService: TodosService) {}

  addTodo(): void {
    if (this.todo === '') return;
    this.todosService.addTodo(this.todo);
    this.todo = '';
  }
}
