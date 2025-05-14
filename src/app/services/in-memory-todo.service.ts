import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTodoService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const todos: Todo[] = [];

    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  }
}
