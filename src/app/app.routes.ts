import { Routes } from '@angular/router';
import { PlayerSetupComponent } from './components/player-setup/player-setup.component';
import { BoardComponent } from './components/board/board.component';

export const routes: Routes = [
  { path: '', component: PlayerSetupComponent },
  { path: 'board', component: BoardComponent },
];