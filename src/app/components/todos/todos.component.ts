import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '@services/todos.service';
import { FlexContainerComponent } from '@components/flex-container/flex-container.component';
import { CommonModule } from '@angular/common';
import { ModalService } from '@services/modal.service';
import { MODAL_ID } from 'app/utils/constants';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlexContainerComponent,
    TodosListComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit, OnDestroy {
  todo: string = '';

  totalTodos: number = 0;
  completedTodos: number = 0;
  errorMessage!: string;

  private subscription = new Subscription();

  constructor(
    private _todosService: TodosService,
    private modal: ModalService
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.subscription.add(
      this._todosService.todosUpdated$.subscribe(() => {
        this.getTodos();
      })
    );
  }

  getTodos(): void {
    this._todosService.getTodos().subscribe({
      next: (todos) => {
        this.totalTodos = todos.length;
        const completed = todos.filter((todo) => todo.completed);
        this.completedTodos = completed.length;
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.errorMessage = `Failed to load todos: ${err.body.error}`;
      },
    });
  }

  openCreateModal(): void {
    this.modal.toggleModal(MODAL_ID.CREATE_TODO);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
