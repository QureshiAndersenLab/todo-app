import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos.service';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css',
})
export class EditTodoComponent implements OnInit {
  todo!: Todo;

  loading: boolean = true;

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
    this._todosService.editTask(this.todo).subscribe();
    this._router.navigate(['']);
  }

  goBack() {
    this._router.navigate(['']);
  }
}
