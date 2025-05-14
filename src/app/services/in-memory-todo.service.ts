import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTodoService {
  constructor() {}

  createDb() {
    const todos = [{}];
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  }
}
