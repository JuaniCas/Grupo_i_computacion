import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardHamburguesaDoble } from '../../../component/card-hamburguesa-doble/card-hamburguesa-doble';

@Component({
  selector: 'app-cargar-pedido',
  standalone: true,
  imports: [CommonModule, RouterModule, CardHamburguesaDoble],
  templateUrl: './cargar-pedido.html',
  styleUrls: ['./cargar-pedido.css']
})
export class CargarPedidoComponent {}
