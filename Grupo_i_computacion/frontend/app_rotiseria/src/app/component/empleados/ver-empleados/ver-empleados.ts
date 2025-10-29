import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

// Importamos la interfaz de la tarjeta para usarla en getActions
import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2'; 

interface Empleado {
    id: number;
    nombre: string;
    mail: string;
    cargo: string;
}

@Component({
  selector: 'app-ver-empleados',
  standalone: true, 
  imports: [CommonModule, RouterModule, Card_Fila2, FormsModule],
  templateUrl: './ver-empleados.html', 
  styleUrl: './ver-empleados.css' 
})
export class VerEmpleadosComponent implements OnInit {

    // Lista completa (simula los datos del backend)
    arrayEmpleados: Empleado[] = [
        { id: 1, nombre: 'Ana García', mail: 'ana@mail.com', cargo: 'Gerente' },
        { id: 2, nombre: 'Javier López', mail: 'javier@mail.com', cargo: 'Cocinero Principal' },
        { id: 3, nombre: 'Laura Martínez', mail: 'laura@mail.com', cargo: 'Repartidora' },
        { id: 4, nombre: 'Pedro Sánchez', mail: 'pedro@mail.com', cargo: 'Atención al Cliente' },
    ];
    
    empleados: Empleado[] = []; 
    nombreABuscar: string = '';

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.empleados = [...this.arrayEmpleados];
    }
    
    // Función requerida para el template, que no hace nada (void function)
    editarEmpleado(id: number): void {
        // Por ahora, nada
        console.log(`Acción Editar (ID: ${id}) - Inactiva`);
    }

    // Función requerida para el template, que no hace nada (void function)
    eliminarEmpleado(id: number, nombre: string): void {
        // Por ahora, nada
        console.log(`Acción Eliminar (ID: ${id}) - Inactiva`);
    }

    // Función de filtro/búsqueda (se mantiene activa)
    buscar(): void {
        const nombreBuscado = this.nombreABuscar.toLowerCase();
        
        if (nombreBuscado.length > 0) {
            this.empleados = this.arrayEmpleados.filter(
                e => e.nombre.toLowerCase().includes(nombreBuscado)
            );
        } else {
            this.empleados = [...this.arrayEmpleados];
        }
    }

    // 🌟 FUNCIÓN CLAVE: Crea el array de botones de forma segura en TS
    getActions(empleado: Empleado): CardFila2ActionButton[] {
        return [
            {
                text: 'Editar',
                // Dejamos el link para que sea un <A> (routerLink), pero es un placeholder
                link: '/empleados/editar/' + empleado.id, 
                class: 'btn btn-sm btn-primary'
            },
            {
                text: 'Eliminar',
                // 💥 CORREGIDO: Acción de función lambda vacía, no hace nada, 
                // pero cumple con la interfaz y evita el error del parser.
                action: () => { 
                    // No hace nada
                    this.eliminarEmpleado(empleado.id, empleado.nombre);
                }, 
                class: 'btn btn-sm btn-danger' 
            }
        ];
    }
}