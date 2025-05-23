import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos.service';
import { CommonModule } from '@angular/common';
import { DisplayErrorComponent } from '@components/display-error/display-error.component';
import { FocusDirective } from 'app/shared/focus.directive';
import { FlexContainerComponent } from '../../../flex-container/flex-container.component';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DisplayErrorComponent,
    FocusDirective,
    FlexContainerComponent,
  ],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css',
})
export class EditTodoComponent implements OnInit {
  todo!: Todo;

  loading: boolean = true;
  errorMessage!: string;

  constructor(
    private _route: ActivatedRoute,
    private _todosService: TodosService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._todosService.getTodo(id).subscribe((todo) => {
      this.loading = false;
      this.todo = todo;
    });
  }

  updateTodo(task: string): void {
    this.todo.task = task;
    this._todosService.editTask(this.todo).subscribe({
      next: () => {
        this._todosService.notifyTodosUpdated();
        this._router.navigate(['']);
      },
      error: (err) => {
        console.error('Error updating todos:', err);
        this.errorMessage = `Failed updating todo ${this.todo.task}: ${err.body.error}`;
      },
    });
  }

  goBack() {
    this._router.navigate(['']);
  }
}
