

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Card_Fila, ActionButton } from '../../../component/card-fila/card-fila'; 


interface Cliente {
    id: number;
    nombre: string;
    mail: string;
    direccion: string;
}

@Component({ 
  selector: 'app-bloquear-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule, Card_Fila], 
  templateUrl: './bloquear-clientes.component.html',
  styleUrls: ['./bloquear-clientes.component.css']
})

export class BloquearClientesComponent { 

    clientes: Cliente[] = [ 
        { id: 1, nombre: 'Cliente #1', mail: 'cliente1@mail.com', direccion: 'Calle Falsa 123' },
        { id: 2, nombre: 'Cliente #2', mail: 'cliente2@mail.com', direccion: 'Avenida Siempre Viva 742' },
        { id: 3, nombre: 'Cliente #3', mail: 'cliente3@mail.com', direccion: 'Boulevard de los Sueños' },
    ];

    bloquearCliente(id: number) {
        console.log(`Bloqueando cliente con ID: ${id}`);
        alert(`Cliente ${id} bloqueado.`);
    }

    getClienteActions(clienteId: number): ActionButton[] {
        return [
            {
                text: 'Bloquear', 
                class: 'btn-link red-link', 
                callback: () => this.bloquearCliente(clienteId) 
            }
        ];
    }
}