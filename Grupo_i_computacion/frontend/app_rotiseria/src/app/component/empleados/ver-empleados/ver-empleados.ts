import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2'; 
import { Usuarios } from '../../../services/usuarios';

interface Empleado {
    id_usuario: number;
    nombre: string;
    apellido: string;
    email: string;
    celular: string;
}

@Component({
  selector: 'app-ver-empleados',
  standalone: true, 
  imports: [CommonModule, RouterModule, Card_Fila2, FormsModule],
  templateUrl: './ver-empleados.html', 
  styleUrl: './ver-empleados.css' 
})
export class VerEmpleadosComponent implements OnInit {

    arrayEmpleados: Empleado[] = [];
    empleados: Empleado[] = []; 
    nombreABuscar: string = '';

    constructor(
        private router: Router,
        private usuariosService: Usuarios
    ) {}

    ngOnInit(): void {

        this.cargarEmpleados();

    }

    cargarEmpleados(): void {
        this.usuariosService.getUsuarios().subscribe({
            next: (data) => {
                this.arrayEmpleados = data[0];
                this.empleados = [...this.arrayEmpleados];

                console.log('Empleados cargados:', this.empleados);
            },
            error: (error) => {
                console.error('Error al cargar empleados:', error);
            }
        });
    }

    eliminarEmpleado(id: number, nombre: string): void {
        // Por ahora nada
        console.log(`Acción Eliminar (ID: ${id}) - Inactiva`);
    }

    buscar(): void {
        const nombreBuscado = this.nombreABuscar.toLowerCase();
        
        if (nombreBuscado.length > 0) {
            this.empleados = this.arrayEmpleados.filter(
                e => {
                    const nombreCompleto = `${e.nombre} ${e.apellido}`.toLowerCase();
                    return nombreCompleto.includes(nombreBuscado);
                }
            );
        } else {
            this.empleados = [...this.arrayEmpleados];
        }
    }

    getActions(empleado: Empleado): CardFila2ActionButton[] {
        return [
            {
                text: 'Editar',
                link: `/empleado/${empleado.id_usuario}/Editar`, 
                class: 'btn btn-sm btn-primary'
            },
            
            {
                text: 'Eliminar',
                action: () => { 
                    // No hace nada
                    this.eliminarEmpleado(empleado.id_usuario, empleado.nombre);
                }, 
                class: 'btn btn-sm btn-danger' 
            }
        ];
    }
}