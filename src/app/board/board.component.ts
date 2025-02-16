import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule, SquareComponent],
  template: `<h1>Board Works!</h1>`,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = false;
  winner: string | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log('BoardComponent Initialized');
    try {
      this.newGame();
      console.log('BoardComponent Loaded Successfully');
    } catch (error) {
      console.error('Error in BoardComponent:', error);
    }
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.winner = this.calculateWinner();
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
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
}
