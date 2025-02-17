import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="w-20 h-20 border-2 border-gray-700 rounded-lg text-4xl font-bold flex items-center justify-center transition-all duration-300"
      [ngClass]="{
        'text-gray-400 bg-gray-800': !value,
        'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/50':
          value === 'X',
        'bg-lime-500 text-gray-900 shadow-lg shadow-lime-500/50': value === 'O'
      }"
    >
      {{ value }}
    </button>
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
