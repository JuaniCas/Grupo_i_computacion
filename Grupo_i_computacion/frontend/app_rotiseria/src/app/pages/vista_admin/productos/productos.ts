import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila2 } from '../../../component/card-fila2/card-fila2'; 
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';

interface Producto {
    id: number;
    nombre: string;
    categoria: string;
    precio: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,

  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent], 
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

    productos: Producto[] = [
        { id: 1, nombre: 'Hamburguesa Clásica', categoria: 'Comida', precio: 12.50 },
        { id: 2, nombre: 'Refresco Cola', categoria: 'Bebida', precio: 3.00 },
        { id: 3, nombre: 'Papas Fritas Grandes', categoria: 'Acompañamiento', precio: 4.50 },
        { id: 4, nombre: 'Sándwich Vegano', categoria: 'Comida', precio: 10.00 },
    ];
    
 
}