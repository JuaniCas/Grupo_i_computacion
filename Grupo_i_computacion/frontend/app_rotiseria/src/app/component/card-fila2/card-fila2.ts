
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 

export interface CardFila2ActionButton {
  text: string;
  class: string;     
  link?: string;     
  action?: () => void; 
}

@Component({
  selector: 'app-card-fila2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-fila2.html',
  styleUrl: './card-fila2.css'
})
export class Card_Fila2 {
  @Input() actions: CardFila2ActionButton[] = [];
}