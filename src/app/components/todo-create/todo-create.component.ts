import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '@services/todos.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css',
})
export class TodoCreateComponent {
  todo: string = '';

  constructor(private todosService: TodosService) {}

  addTodo(): void {
    this.todosService.addTodo(this.todo);
    this.todo = '';
  }
}
