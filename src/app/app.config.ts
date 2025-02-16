import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PlayerSetupComponent } from './player-setup/player-setup.component';
import { BoardComponent } from './board/board.component';
import {routes} from './app.routes'
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Only define routes here
    // provideClientHydration(withEventReplay()),
  ],
};
