import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '@models/todo.model';
import { TodosService } from '@services/todos.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodosService) {}

  markComplete(id: number): void {
    this.todoService.markComplete(id);
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id);
  }
}
