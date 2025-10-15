import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';

interface Pedido {
    id: number;
    nombre: string;
    direccion: string;
    usuario: string; 
}

@Component({
  selector: 'app-editar-pedidos',
  standalone: true,
  
  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent], 
  templateUrl: './editar-pedidos.html',
  styleUrl: './editar-pedidos.css'
})
export class EditarPedidos {
    pedidos: Pedido[] = [
        { id: 1, nombre: 'Pedido #1', direccion: 'Calle Falsa 123', usuario: 'Juan Perez' },
        { id: 2, nombre: 'Pedido #2', direccion: 'Av. Siempre Viva 456', usuario: 'Maria Gomez' },
        { id: 3, nombre: 'Pedido #3', direccion: 'Ruta 3 km 50', usuario: 'Carlos Ruiz' },
    ];

   

    eliminarPedido(id: number, nombre: string): void {
        if (confirm(`¿Estás seguro de que quieres eliminar ${nombre}?`)) {
   
            this.pedidos = this.pedidos.filter(p => p.id !== id);
            console.log(`${nombre} eliminado.`);
        }
    }


    getActions(pedido: Pedido): CardFila2ActionButton[] {
        return [
            {
                text: 'Editar',

                link: '/editar_pedido_detalle/' + pedido.id, 
                class: 'btn btn-dark btn-sm btn-mini' 
            },
            {
                text: 'Eliminar',

                action: () => this.eliminarPedido(pedido.id, pedido.nombre),
                class: 'btn btn-danger btn-sm btn-mini' 
            }
        ];
    }
}