import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';


import { Card_Fila2 } from '../../../component/card-fila2/card-fila2'; 
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';

interface Pedido {
    id: number;
    usuario: string;
    direccion: string;
    estado: string;
}

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent], 
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class Pedidos {

    pedidos: Pedido[] = [
        { id: 1, usuario: 'Juan Perez', direccion: 'Calle Falsa 123', estado: 'Pendiente' },
        { id: 2, usuario: 'Maria Gomez', direccion: 'Av. Siempre Viva 456', estado: 'En preparación' },
        { id: 3, usuario: 'Carlos Ruiz', direccion: 'Ruta 3 km 50', estado: 'Entregado' },
        { id: 4, usuario: 'Laura Martinez', direccion: 'Av. Principal 101', estado: 'Cancelado' },
    ];
    
    
}