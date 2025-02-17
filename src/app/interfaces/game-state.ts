import { GameMove } from './game-move';

export interface GameState {
  moves: GameMove[];
  currentPlayer: string;
  winner: string | null;
  isGameOver: boolean;
  winningLine: number[] | null; 
}
