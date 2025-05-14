import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoService } from '@services/in-memory-todo.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    importProvidersFrom(
      InMemoryWebApiModule.forRoot(InMemoryTodoService, {
        delay: 500,
      })
    ),
  ],
};
