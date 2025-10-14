// src/app/component/card-fila2/card-fila2.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas como *ngIf, @for
import { RouterModule } from '@angular/router'; // Para routerLink en botones

// Interfaz para definir la estructura de los botones de acción
export interface CardFila2ActionButton {
  text: string;
  class: string;     // Clase CSS para el botón (ej: 'btn btn-sm btn-danger')
  link?: string;     // URL para routerLink (si es un enlace)
  action?: () => void; // Función a ejecutar (si es un botón de acción)
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