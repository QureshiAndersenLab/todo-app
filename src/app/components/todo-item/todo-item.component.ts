import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodosService, private _router: Router) {}

  markComplete(id: number): void {
    this.todoService.markComplete(id);
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id);
  }

  handleEdit(id: number): void {
    this._router.navigate(['/edit-todo', id]);
  }
}
