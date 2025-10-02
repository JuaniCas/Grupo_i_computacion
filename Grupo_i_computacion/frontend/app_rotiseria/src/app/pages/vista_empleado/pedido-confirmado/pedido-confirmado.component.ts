import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pedido-confirmado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pedido-confirmado.component.html',
  styleUrls: ['./pedido-confirmado.component.css']
})
export class PedidoConfirmadoComponent {}
