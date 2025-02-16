import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MaterialModule,
    ),
    provideZoneChangeDetection(
      { eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync()]
};
