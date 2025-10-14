

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { Card_Base } from '../../../component/card-base/card-base'; 
import { PageHeaderComponent } from '../../../component/header-adm-emp/header-adm-emp'; 

interface Item_Admin {
  titulo: string;
  icono: string;
  ruta: string;
}

@Component({
  selector: 'app-pagina-principal-admin',
  standalone: true, 

  imports: [CommonModule, Card_Base, PageHeaderComponent], 
  templateUrl: './pagina-principal-admin.html',
  styleUrls: ['./pagina-principal-admin.css']
})
export class PaginaPrincipalAdmin {
  elementos_admin: Item_Admin[] = [
    { titulo: 'Promociones', icono: 'bi-percent', ruta: '/promociones' },
    { titulo: 'Clientes', icono: 'bi-person-plus', ruta: '/clientes' },
    { titulo: 'Empleados', icono: 'bi-person-badge', ruta: '/empleados' },
    { titulo: 'Pedidos', icono: 'bi-clipboard-check', ruta: '/pedidos' },
    { titulo: 'Productos', icono: 'bi-shop', ruta: '/productos' },
  ];
}