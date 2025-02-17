import { Injectable } from '@angular/core';
import { GameState } from '../interfaces/game-state';
import { GameMove } from '../interfaces/game-move';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GameStateService {
  private initialState: GameState = {
    moves: [],
    currentPlayer: '',
    winner: null,
    isGameOver: false,
    winningLine: null,
  };

  private gameState = new BehaviorSubject<GameState>(this.initialState);
  private movesTrack = new BehaviorSubject<GameMove[]>([]);
  constructor() {}

  gameState$ = this.gameState.asObservable();
  movesTrack$ = this.movesTrack.asObservable();

  addMove(move: GameMove): void {
    const currentMoves = this.movesTrack.getValue();
    this.movesTrack.next([...currentMoves, move]);

    const currentState = this.gameState.getValue();
    this.gameState.next({
      ...currentState,
      moves: [...currentMoves, move],
      currentPlayer: currentState.currentPlayer === 'X' ? 'O' : 'X',
    });
  }

  resetGame(firstPlayer: string): void {
    this.movesTrack.next([]);
    this.gameState.next({
      ...this.initialState,
      currentPlayer: firstPlayer,
    });
  }

  setWinner(winner: string, winningLine: number[]): void {
    const currentState = this.gameState.getValue();
    this.gameState.next({
      ...currentState,
      winner,
      winningLine,
      isGameOver: true,
    });
  }

  getGameStatus(): GameState {
    return this.gameState.getValue();
  }
}
