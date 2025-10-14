

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Card_Fila, ActionButton } from '../../../component/card-fila/card-fila'; 


interface ClienteEnEspera {
    id: number; 
    nombre: string;
    mail: string;
    direccion: string;
}

@Component({
  selector: 'app-validar-cuentas',
  standalone: true,

  imports: [CommonModule, RouterModule, Card_Fila], 
  templateUrl: './validar-cuentas.component.html',

  styleUrls: ['./validar-cuentas.component.css'] 
})
export class ValidarCuentasComponent {

    clientes: ClienteEnEspera[] = [
        { id: 1, nombre: 'Cliente en espera #1', mail: 'espera1@mail.com', direccion: 'Av. Siempre Viva 100' },
        { id: 2, nombre: 'Cliente en espera #2', mail: 'espera2@mail.com', direccion: 'Calle Falsa 456' },
        { id: 3, nombre: 'Cliente en espera #3', mail: 'espera3@mail.com', direccion: 'Ruta 10 km 5' },
    ];


    aceptarCuenta(id: number) {
        console.log(`Aceptando cuenta con ID: ${id}`);
        alert(`Cuenta ${id} aceptada.`);

    }


    denegarCuenta(id: number) {
        console.log(`Denegando cuenta con ID: ${id}`);
        alert(`Cuenta ${id} denegada.`);

    }


    getClienteActions(clienteId: number): ActionButton[] {
        return [
            {
                text: 'Aceptar', 
                class: 'btn-success', 
                callback: () => this.aceptarCuenta(clienteId) 
            },
            {
                text: 'Denegar', 
                class: 'btn-danger', 
                callback: () => this.denegarCuenta(clienteId) 
            }
        ];
    }
}