import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private player1: { name: string; symbol: string } = { name: '', symbol: '' };
  private player2: { name: string; symbol: string } = { name: '', symbol: '' };

  setPlayers(
    player1: { name: string; symbol: string },
    player2: { name: string; symbol: string }
  ) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getPlayers() {
    return { player1: this.player1, player2: this.player2 };
  }
}
