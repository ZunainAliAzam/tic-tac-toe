import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="w-full h-full flex items-center justify-center text-xl sm:text-3xl font-bold rounded-lg transition-all duration-300"
      [ngClass]="{
        'text-gray-400 border-2 border-gray-700 bg-gray-800 hover:bg-gray-700':
          !value,
        'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/50 hover:bg-yellow-400':
          value === 'X',
        'bg-lime-500 text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-lime-400':
          value === 'O',
        'winning-square': isWinningSquare
      }"
    >
      {{ value }}
    </button>
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
  @Input() isWinningSquare: boolean = false;
}
