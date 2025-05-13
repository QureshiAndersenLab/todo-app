import { Component } from '@angular/core';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoCreateComponent, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo App';
}
