import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private baseUrl = 'api/todos';

  constructor(private _http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.baseUrl);
  }

  getTodo(id: number): Observable<Todo> {
    return this._http.get<Todo>(`${this.baseUrl}/${id}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this._http
      .post<Todo>(this.baseUrl, todo)
      .pipe(tap((_) => console.log('Todo added')));
  }

  markComplete(todo: Todo): Observable<Todo> {
    return this._http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  editTask(todo: Todo): Observable<Todo> {
    return this._http.put<any>(this.baseUrl, todo);
  }

  deleteTask(id: number): Observable<Todo> {
    return this._http.delete<Todo>(`${this.baseUrl}/${id}`);
  }
}
