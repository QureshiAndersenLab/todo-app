import { Routes } from '@angular/router';
import { EditTodoComponent } from '@components/todos/components/edit-todo/edit-todo.component';
import { TodosComponent } from '@components/todos/todos.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'edit-todo/:id', component: EditTodoComponent },
];
