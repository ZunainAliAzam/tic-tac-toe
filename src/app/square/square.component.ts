import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="w-20 h-20 flex items-center justify-center text-2xl font-bold border-2 border-gray-500 rounded-md transition duration-300 ease-in-out hover:bg-gray-200"
      nbButton
    >
      {{ value || '' }}
    </button>
  `,
  styles: ``,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
