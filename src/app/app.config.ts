import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoService } from '@services/in-memory-todo.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(InMemoryTodoService, {
        delay: 500,
      })
    ),
  ],
};
