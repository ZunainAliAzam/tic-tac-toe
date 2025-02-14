import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../services/player.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-setup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './player-setup.component.html',
  styleUrl: './player-setup.component.scss',
})

export class PlayerSetupComponent {
  playerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService, 
    private router: Router
  ) {
    this.playerForm = this.fb.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player1Symbol: ['', Validators.required],
      player2Symbol: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.playerForm.valid) {
      console.log('Form submitted:', this.playerForm.value); // Debugging
      const { player1, player2, player1Symbol, player2Symbol } = this.playerForm.value;
  
      if (player1Symbol === player2Symbol) {
        alert('Player symbols cannot be the same');
        return;
      }
  
      this.playerService.setPlayers(
        { name: player1, symbol: player1Symbol },
        { name: player2, symbol: player2Symbol }
      );
  
      console.log('Navigating to board...'); // Debugging
      this.router.navigate(['/board']);
    } else {
      // Log individual form control errors
      console.log('Form is invalid');
      console.log('Player 1 Name Errors:', this.playerForm.get('player1')?.errors);
      console.log('Player 2 Name Errors:', this.playerForm.get('player2')?.errors);
      console.log('Player 1 Symbol Errors:', this.playerForm.get('player1Symbol')?.errors);
      console.log('Player 2 Symbol Errors:', this.playerForm.get('player2Symbol')?.errors);
    }
  }
  
  
}
