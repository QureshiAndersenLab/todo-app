import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  private _idCounter = 0;

  addTodo(task: string): void {
    const newTodo: Todo = { id: ++this._idCounter, task, completed: false };
    this.todosSubject$.next([...this.todosSubject$.value, newTodo]);
  }

  markComplete(id: number): void {
    const newTodos = this.todosSubject$.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.todosSubject$.next(newTodos);
  }

  getTodo(id: number): Todo {
    return this.todosSubject$.value.find((todo) => todo.id === id)!;
  }

  editTask(todo: Todo): void {
    const newTodos = this.todosSubject$.value.map((curTodo) =>
      curTodo.id === todo.id ? todo : curTodo
    );

    this.todosSubject$.next(newTodos);
  }

  deleteTask(id: number): void {
    const newTodos = this.todosSubject$.value.filter((todo) => todo.id !== id);

    this.todosSubject$.next(newTodos);
  }
}
