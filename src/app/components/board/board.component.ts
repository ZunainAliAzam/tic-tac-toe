import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { RouterModule } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { GameStateService } from '../../services/game-state.service';
import { GameMove } from '../../interfaces/game-move';
import { Subscription } from 'rxjs';
import { MovesTrackComponent } from '../moves-track/moves-track.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule, SquareComponent, MovesTrackComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})

export class BoardComponent implements OnInit, OnDestroy {
  squares: any[] = [];
  xIsNext: boolean = false;
  winner: string | null = null;
  movesTrack: GameMove[] = [];
  winningLine: number[] | null = null;

  private gameStateSubscription: Subscription = new Subscription();

  constructor(
    private playerService: PlayerService,
    private gameStateService: GameStateService
  ) {
    this.gameStateService.movesTrack$.subscribe((moves) => {
      this.movesTrack = moves;
    });
  }

  ngOnInit(): void {
    console.log('BoardComponent Initialized');
    try {
      this.newGame();
      console.log('BoardComponent Loaded Successfully');
    } catch (error) {
      console.error('Error in BoardComponent:', error);
    }
  }

  ngOnDestroy(): void {
    if (this.gameStateSubscription) {
      this.gameStateSubscription.unsubscribe();
    }
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    const player1 = this.playerInfo.player1.name;
    this.gameStateService.resetGame(player1);
    this.winningLine = null;
  }

  get playerInfo() {
    const { player1, player2 } = this.playerService.getPlayers();
    return { player1, player2 };
  }

  get player() {
    return this.xIsNext
      ? this.playerInfo.player1.name
      : this.playerInfo.player2.name;
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      const currentPlayer = this.xIsNext
        ? this.playerInfo.player1
        : this.playerInfo.player2;

      const move: GameMove = {
        position: idx,
        symbol: currentPlayer.symbol,
        player: currentPlayer.name,
        timestamp: new Date(),
      };

      this.squares.splice(idx, 1, currentPlayer.symbol);
      this.gameStateService.addMove(move);

      this.winner = this.calculateWinner();

      if (this.winner) {
        this.gameStateService.setWinner(this.winner, this.winningLine!);
      }

      this.xIsNext = !this.xIsNext;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winningLine = line;
        return this.squares[a];
      }
    }
    return null;
  }

  get gameStatus() {
    return this.winner
      ? `Winner: ${this.winner}`
      : `Current player: ${this.player}`;
  }

  getLineCoordinates(index: number) {
    const squareSize = 100; // percentage
    const padding = 10; // percentage

    const row = Math.floor(index / 3);
    const col = index % 3;

    return {
      x: (col * squareSize) / 3 + squareSize / 6 + '%',
      y: (row * squareSize) / 3 + squareSize / 6 + '%',
    };
  }
}
