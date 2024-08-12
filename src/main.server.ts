import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/Home/app.component';
import { config } from './app/Home/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
