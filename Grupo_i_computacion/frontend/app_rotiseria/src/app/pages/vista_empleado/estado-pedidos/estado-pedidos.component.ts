import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-estado-pedidos',
  standalone: true,

  imports: [CommonModule, RouterModule], 
  templateUrl: './estado-pedidos.component.html',
  styleUrls: ['./estado-pedidos.component.css']
})
export class EstadoPedidosComponent {
  pedidos = [
    { numero: 1, estado: 'Pendiente', estadoClass: 'chip-pend' },
    { numero: 2, estado: 'En preparación', estadoClass: 'chip-prep' },
    { numero: 3, estado: 'Listo', estadoClass: 'chip-listo' },
    { numero: 4, estado: 'Entregado', estadoClass: 'chip-ent' },
    { numero: 5, estado: 'Entregado', estadoClass: 'chip-ent' },
    { numero: 6, estado: 'Pendiente', estadoClass: 'chip-pend' },
  ];
}