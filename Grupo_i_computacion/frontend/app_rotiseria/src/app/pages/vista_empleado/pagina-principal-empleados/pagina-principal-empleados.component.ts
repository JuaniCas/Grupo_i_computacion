

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../component/header-adm-emp/header-adm-emp';

import { Card_Base } from '../../../component/card-base/card-base'; 

interface EmpleadoTile {
    title: string;
    icon: string;
    link: string;
}

@Component({
  selector: 'app-pagina-principal-empleados',
  standalone: true,

  imports: [CommonModule, RouterModule, PageHeaderComponent, Card_Base],
  templateUrl: './pagina-principal-empleados.component.html',
  styleUrls: ['./pagina-principal-empleados.component.css']
})
export class PaginaPrincipalEmpleadosComponent {

    empleadoTiles: EmpleadoTile[] = [
        { title: 'Bloquear clientes', icon: 'bi-person-x', link: '/bloquear_clientes' },
        { title: 'Validar cuentas', icon: 'bi-person-check', link: '/validar_cuentas' },
        { title: 'Pedidos', icon: 'bi-clipboard-check', link: '/empleados_pedidos' },
        { title: 'Verificar stock', icon: 'bi-check-square', link: '/verificar_stock' }
    ];
}