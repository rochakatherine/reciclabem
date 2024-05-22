import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { routes } from './app-routing.module';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);