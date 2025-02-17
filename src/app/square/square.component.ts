import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="w-20 h-20 text-white font-bold text-3xl" *ngIf="!value">
      {{ value }}
    </button>
    <button
      class="w-20 h-20 bg-yellow-500  text-white font-bold text-3xl"
      *ngIf="value === 'X'"
    >
      {{ value }}
    </button>
    <button
      class="w-20 h-20 bg-lime-500 text-white font-bold text-3xl"
      *ngIf="value === 'O'"
    >
      {{ value }}
    </button>
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
