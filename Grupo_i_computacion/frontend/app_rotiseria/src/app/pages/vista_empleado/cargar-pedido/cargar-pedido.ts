import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cargar-pedido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cargar-pedido.html',
  styleUrls: ['./cargar-pedido.css']
})
export class CargarPedidoComponent {}
