import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="w-20 h-20 text-3xl">{{ value }}</button>
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
