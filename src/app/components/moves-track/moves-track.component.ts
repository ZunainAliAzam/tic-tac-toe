import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMove } from '../../interfaces/game-move';
import { GameStateService } from '../../services/game-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moves-track',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="moves-track bg-gray-800 p-4 rounded-lg max-h-[300px] lg:max-h-[600px] overflow-y-auto"
    >
      <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400">
        Moves track
      </h3>
      <div class="space-y-2">
        <div
          *ngFor="let move of moves$ | async; let i = index"
          class="p-2 bg-gray-700 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <span class="text-gray-300 text-sm sm:text-base">
            Move #{{ i + 1 }}: {{ move.player }} ({{ move.symbol }})
          </span>
          <span class="text-gray-400 text-xs sm:text-sm">
            Position: {{ move.position + 1 }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .moves-track {
        scrollbar-width: thin;
        scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
      }
      .moves-track::-webkit-scrollbar {
        width: 6px;
      }
      .moves-track::-webkit-scrollbar-track {
        background: transparent;
      }
      .moves-track::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, 0.5);
        border-radius: 3px;
      }
    `,
  ],
})
export class MovesTrackComponent implements OnInit {
  moves$: Observable<GameMove[]>;

  constructor(private gameStateService: GameStateService) {
    this.moves$ = this.gameStateService.movesTrack$;
  }

  ngOnInit(): void {}
}
