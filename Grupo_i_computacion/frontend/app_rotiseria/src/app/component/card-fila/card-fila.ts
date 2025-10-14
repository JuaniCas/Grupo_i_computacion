// src/app/component/card-fila/card-fila.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 🛑 Importar RouterLink

// 🛑 Interfaz para los botones de acción
export interface ActionButton {
    text: string;
    class: string;
    link?: string;       // Si tiene 'link', será un RouterLink
    callback?: () => void; // Si tiene 'callback', será un botón de acción
}

@Component({
  selector: 'app-card_fila',
  standalone: true,
  // 🛑 Añadir RouterLink a los imports
  imports: [CommonModule, RouterLink], 
  templateUrl: './card-fila.html',
  styleUrls: ['./card-fila.css']
})
export class Card_Fila {
    // 🛑 Nuevo Input: Una lista de botones de acción
    @Input() actions: ActionButton[] = [];
}