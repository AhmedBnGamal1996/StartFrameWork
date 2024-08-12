import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Home/app.config';
import { AppComponent } from './app/Home/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
