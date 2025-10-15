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
  selector: 'app-editar-empleados',
  standalone: true,

  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent], 
  templateUrl: './editar-empleados.html',
  styleUrl: './editar-empleados.css'
})
export class EditarEmpleados {

    empleados: Empleado[] = [
        { id: 1, nombre: 'Ana García', mail: 'ana@mail.com', cargo: 'Gerente' },
        { id: 2, nombre: 'Javier López', mail: 'javier@mail.com', cargo: 'Cocinero Principal' },
        { id: 3, nombre: 'Laura Martínez', mail: 'laura@mail.com', cargo: 'Repartidora' },
    ];



    eliminarEmpleado(id: number, nombre: string): void {
        if (confirm(`¿Estás seguro de que quieres eliminar a ${nombre}?`)) {

            this.empleados = this.empleados.filter(e => e.id !== id);
            console.log(`Empleado ${nombre} eliminado.`);
        }
    }


    getActions(empleado: Empleado): CardFila2ActionButton[] {
        return [
            {
                text: 'Editar',
                
                link: '/editar_empleado_detalle/' + empleado.id, 
                class: 'btn btn-dark btn-sm btn-mini' 
            },
            {
                text: 'Eliminar',
               
                action: () => this.eliminarEmpleado(empleado.id, empleado.nombre),
                class: 'btn btn-danger btn-sm btn-mini'
            }
        ];
    }
}