import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PlayerSetupComponent } from './player-setup/player-setup.component';
import { BoardComponent } from './board/board.component';
import {routes} from './app.routes'
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Only define routes here
    provideClientHydration(withEventReplay()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideFirebaseApp(() => initializeApp({ projectId: "tic-tac-toe-f9654", appId: "1:256374451131:web:f03ff90f86ab0123c9729e", storageBucket: "tic-tac-toe-f9654.firebasestorage.app", apiKey: "AIzaSyA6hw--4Klukd_UZ7qNzDT1c23X1Xjz1wM", authDomain: "tic-tac-toe-f9654.firebaseapp.com", messagingSenderId: "256374451131", measurementId: "G-D3HPBZ1VTV" })), provideDatabase(() => getDatabase()),
  ],
};
