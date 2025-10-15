import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';


interface Empleado {
    id: number;
    nombre: string;
    mail: string;
    cargo: string;
}

@Component({
  selector: 'app-empleados',
  standalone: true, 

  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class Empleados {


    empleados: Empleado[] = [
        { id: 1, nombre: 'Ana García', mail: 'ana@mail.com', cargo: 'Gerente' },
        { id: 2, nombre: 'Javier López', mail: 'javier@mail.com', cargo: 'Cocinero Principal' },
        { id: 3, nombre: 'Laura Martínez', mail: 'laura@mail.com', cargo: 'Repartidora' },
        { id: 4, nombre: 'Pedro Sánchez', mail: 'pedro@mail.com', cargo: 'Atención al Cliente' },
    ];

    eliminarEmpleado(id: number, nombre: string): void {
        if (confirm(`¿Estás seguro de que quieres eliminar al empleado: ${nombre}?`)) {

            this.empleados = this.empleados.filter(e => e.id !== id);
            console.log(`Empleado ${nombre} eliminado.`);
        }
    }

    getActions(empleado: Empleado): CardFila2ActionButton[] {
        return [
            {
                text: 'Eliminar',
                action: () => this.eliminarEmpleado(empleado.id, empleado.nombre),
                class: 'btn btn-sm btn-danger' 
            }
        ];
    }
}