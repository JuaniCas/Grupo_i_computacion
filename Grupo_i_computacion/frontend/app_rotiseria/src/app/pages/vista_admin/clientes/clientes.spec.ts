
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila } from '../../../component/card-fila/card-fila'; 


interface ClienteActionButton {
    text: string;
    class: string;
    action?: () => void; 
    link?: string;
}

interface Cliente {
    id: number;
    nombre: string;
    mail: string;
    direccion: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  
  imports: [CommonModule, RouterModule, Card_Fila], 
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes {

    clientes: Cliente[] = [
        { id: 1, nombre: 'Cliente #1', mail: 'cliente1@mail.com', direccion: 'Calle Falsa 123' },
        { id: 2, nombre: 'Cliente #2', mail: 'cliente2@mail.com', direccion: 'Av. Siempreviva 742' },
        { id: 3, nombre: 'Cliente #3', mail: 'cliente3@mail.com', direccion: 'Ruta 3 KM 50' },
    ];

  
    bloquearCliente(nombre: string): void {
        alert(`Cliente ${nombre} bloqueado.`);
       
    }

 
    getActions(cliente: Cliente): ClienteActionButton[] {
        return [
            { 
                text: 'Bloquear', 
                action: () => this.bloquearCliente(cliente.nombre), 
                class: 'link-red' 
            },
        ];
    }
}