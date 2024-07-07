import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';
import { hello } from './hello.component';
import {sample} from './sample/sample.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(hello, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(sample, appConfig)
  .catch((err) => console.error(err));