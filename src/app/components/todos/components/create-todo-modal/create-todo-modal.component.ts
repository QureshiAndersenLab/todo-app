import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { Todo } from '@models/todo.model';
import { ModalService } from '@services/modal.service';
import { TodosService } from '@services/todos.service';
import { FocusDirective } from 'app/shared/focus.directive';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { MODAL_ID } from 'app/utils/constants';

@Component({
  selector: 'app-create-todo-modal',
  standalone: true,
  imports: [
    ModalComponent,
    ButtonComponent,
    FormsModule,
    CommonModule,
    FocusDirective,
  ],
  templateUrl: './create-todo-modal.component.html',
  styleUrl: './create-todo-modal.component.css',
})
export class CreateTodoModalComponent implements OnInit {
  todo: string = '';

  constructor(
    private _todosService: TodosService,
    private _modal: ModalService
  ) {}

  createTodoID: string = MODAL_ID.CREATE_TODO;

  ngOnInit(): void {
    this._modal.registerModal(this.createTodoID);
  }

  addTodo(): void {
    console.log('addTodo');
    this.todo = this.todo.trim();
    if (!this.todo) return;

    const newTodo: Todo = { task: this.todo, completed: false } as Todo;

    this._todosService.addTodo(newTodo).subscribe((_) => {
      this.todo = '';
      this._modal.toggleModal(this.createTodoID);
    });
  }
}
