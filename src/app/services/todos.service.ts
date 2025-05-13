import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';
import { BehaviorSubject } from 'rxjs';

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

  // editTask(id: number): void {
  //   const newTodos = this.todosSubject$.value.filter((todo) => todo.id !== id);

  //   this.todosSubject$.next(newTodos);
  // }

  deleteTask(id: number): void {
    const newTodos = this.todosSubject$.value.filter((todo) => todo.id !== id);

    this.todosSubject$.next(newTodos);
  }
}
