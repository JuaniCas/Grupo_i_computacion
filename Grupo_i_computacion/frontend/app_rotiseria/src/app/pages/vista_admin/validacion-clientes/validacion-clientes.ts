import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';


interface ClientePendiente {
    id: number;
    nombre: string;
    email: string;
    direccion: string;
}

@Component({
  selector: 'app-validacion-clientes',
  standalone: true, 
  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent],
  templateUrl: './validacion-clientes.html',
  styleUrl: './validacion-clientes.css'
})
export class ValidacionClientes {


    clientesPendientes: ClientePendiente[] = [
        { id: 1, nombre: 'Cliente en espera #1', email: 'mail1@prueba.com', direccion: 'Dirección #1' },
        { id: 2, nombre: 'Cliente en espera #2', email: 'mail2@prueba.com', direccion: 'Dirección #2' },
        { id: 3, nombre: 'Cliente en espera #3', email: 'mail3@prueba.com', direccion: 'Dirección #3' },
        { id: 4, nombre: 'Cliente en espera #4', email: 'mail4@prueba.com', direccion: 'Dirección #4' },
    ];


    aceptarCliente(id: number, nombre: string): void {
        console.log(`Cliente ${nombre} (ID: ${id}) aceptado.`);

        this.clientesPendientes = this.clientesPendientes.filter(c => c.id !== id);
    }


    denegarCliente(id: number, nombre: string): void {
        console.log(`Cliente ${nombre} (ID: ${id}) denegado.`);

        this.clientesPendientes = this.clientesPendientes.filter(c => c.id !== id);
    }


    getActions(cliente: ClientePendiente): CardFila2ActionButton[] {
        return [
            {
                text: 'Aceptar',
                action: () => this.aceptarCliente(cliente.id, cliente.nombre),
                class: 'btn btn-sm btn-success'
            },
            {
                text: 'Denegar',
                action: () => this.denegarCliente(cliente.id, cliente.nombre),
                class: 'btn btn-sm btn-danger'
            }
        ];
    }
}