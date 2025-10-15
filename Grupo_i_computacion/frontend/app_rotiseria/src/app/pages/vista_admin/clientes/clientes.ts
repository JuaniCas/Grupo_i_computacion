

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';

interface Cliente {
    id: number;
    nombre: string;
    email: string;
    direccion: string;
    bloqueado: boolean;
}

@Component({
  selector: 'app-clientes',
  standalone: true,

  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class Clientes {
    clientes: Cliente[] = [
        { id: 1, nombre: 'Juan Perez', email: 'juan@mail.com', direccion: 'Calle Falsa 123', bloqueado: false },
        { id: 2, nombre: 'Maria Gomez', email: 'maria@mail.com', direccion: 'Av. Siempre Viva 456', bloqueado: true },
        { id: 3, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', direccion: 'Ruta 3 km 50', bloqueado: false },
    ];


    toggleBloqueo(id: number, nombre: string): void {
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) return;

        const action = cliente.bloqueado ? 'desbloquear' : 'bloquear';

        if (confirm(`¿Estás seguro de que quieres ${action} al cliente: ${nombre}?`)) {
            cliente.bloqueado = !cliente.bloqueado;
            console.log(`Cliente ${nombre} ${cliente.bloqueado ? 'bloqueado' : 'desbloqueado'}.`);
        }
    }


    getActions(cliente: Cliente): CardFila2ActionButton[] {
        const estadoText = cliente.bloqueado ? 'Desbloquear' : 'Bloquear';
        const estadoClass = cliente.bloqueado ? 'btn btn-sm btn-success' : 'btn btn-sm btn-danger';

        return [
            {
                text: estadoText,
                action: () => this.toggleBloqueo(cliente.id, cliente.nombre),
                class: estadoClass
            }
        ];
    }
}