

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../component/header-adm-emp/header-adm-emp';

import { Card_Base } from '../../../component/card-base/card-base'; 

interface PedidoTile {
    title: string;
    icon: string;
    link: string;
}

@Component({
  selector: 'app-empleados-pedidos',
  standalone: true,

  imports: [CommonModule, RouterModule, PageHeaderComponent, Card_Base],
  templateUrl: './empleados-pedidos.component.html',
  styleUrls: ['./empleados-pedidos.component.css']
})
export class EmpleadosPedidosComponent {

    pedidoTiles: PedidoTile[] = [
        { title: 'Cargar pedidos', icon: 'bi-pencil-square', link: '/cargar_pedido' },
        { title: 'Ver y actualizar estado de pedidos', icon: 'bi-eye', link: '/estado_pedidos' },
    ];
}