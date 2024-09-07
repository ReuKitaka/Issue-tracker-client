import { bootstrapApplication } from '@angular/platform-browser';
import { IssuesComponent } from './app/components/issues/issues.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';




  bootstrapApplication(IssuesComponent, {
    providers: [
      provideHttpClient(),
      provideRouter(routes),
    ]
  })
  .catch(err => console.error(err));