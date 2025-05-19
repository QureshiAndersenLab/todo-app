import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@models/todo.model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private baseUrl = 'api/todos';

  private todosUpdatedSource = new Subject<void>();
  todosUpdated$ = this.todosUpdatedSource.asObservable();

  constructor(private _http: HttpClient) {}

  notifyTodosUpdated(): void {
    this.todosUpdatedSource.next();
  }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.baseUrl);
  }

  getTodo(id: number): Observable<Todo> {
    return this._http.get<Todo>(`${this.baseUrl}/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this._http.post<Todo>(this.baseUrl, todo).pipe(
      tap(() => {
        console.log('Todo added');
        this.todosUpdatedSource.next();
      })
    );
  }

  markComplete(todo: Todo): Observable<Todo> {
    return this._http
      .put<Todo>(`${this.baseUrl}/${todo.id}`, todo)
      .pipe(tap(() => this.todosUpdatedSource.next()));
  }

  editTask(todo: Todo): Observable<Todo> {
    return this._http
      .put<any>(this.baseUrl, todo)
      .pipe(tap(() => this.todosUpdatedSource.next()));
  }

  deleteTask(id: number): Observable<Todo> {
    return this._http
      .delete<Todo>(`${this.baseUrl}/${id}`)
      .pipe(tap(() => this.todosUpdatedSource.next()));
  }
}
