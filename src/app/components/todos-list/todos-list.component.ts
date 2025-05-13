import { Component, OnInit } from '@angular/core';
import { TodosService } from '@services/todos.service';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '@components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  todos$ = this.todosService.todos$;

  constructor(private todosService: TodosService) {}
}
