import { Routes } from '@angular/router';
import { PlayerSetupComponent } from './player-setup/player-setup.component';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
  { path: '', component: PlayerSetupComponent },
  { path: 'board', component: BoardComponent },
];
