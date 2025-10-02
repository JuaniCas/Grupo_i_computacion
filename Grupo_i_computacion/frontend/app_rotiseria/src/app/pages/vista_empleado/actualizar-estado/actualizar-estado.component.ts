import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actualizar-estado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './actualizar-estado.component.html',
  styleUrls: ['./actualizar-estado.component.css']
})
export class ActualizarEstadoComponent {
  estado: string = '';

  setEstado(valor: string) {
    this.estado = valor;
  }
}
