import { Component } from '@angular/core';
import { TodoCreateComponent } from '@components/todo-create/todo-create.component';
import { TodosListComponent } from '@components/todos-list/todos-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoCreateComponent, TodosListComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {}
