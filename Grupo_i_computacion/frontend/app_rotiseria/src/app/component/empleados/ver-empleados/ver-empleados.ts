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
    rol: string;
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

    currentPage: number = 1;
    totalPages: number = 1;

    constructor(
        private router: Router,
        private usuariosService: Usuarios
    ) {}

    ngOnInit(): void {

        this.cargarEmpleados();

    }

    cargarEmpleados(): void {

        const filtros = {
            rol: 'empleado',
            page: this.currentPage
        };

        this.usuariosService.getUsuarios(filtros).subscribe({
            next: (respuestaCompleta) => {
                const soloEmpleados = respuestaCompleta[0];

                this.totalPages = respuestaCompleta[1].pages;
                this.currentPage = respuestaCompleta[1].page;

                this.arrayEmpleados = soloEmpleados;
                this.buscar();

                console.log('Empleados cargados:', this.empleados);
            },
            error: (error) => {
                console.error('Error al cargar empleados:', error);
            }
        });
    }

    eliminarEmpleado(empleado:any) {

        const confirmar = confirm(`¿Estás seguro de que deseas eliminar al empleado ${empleado.nombre} ${empleado.apellido}?`);

        if (!confirmar) {
            return;
        }

        this.usuariosService.eliminarUsuario(empleado.id_usuario).subscribe({
            next: (response) => {
                alert(`Empleado ${empleado.nombre} ${empleado.apellido} eliminado correctamente.`);

                this.empleados = this.empleados.filter(e => e.id_usuario !== empleado.id_usuario);
                this.arrayEmpleados = this.arrayEmpleados.filter(e => e.id_usuario !== empleado.id_usuario);
            },
            error: (error) => {
                console.error('Error al eliminar empleado:', error);
                alert('Hubo un error al eliminar el empleado. Por favor, inténtalo de nuevo.');
            }
        });

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
                    this.eliminarEmpleado(empleado);
                }, 
                class: 'btn btn-sm btn-danger' 
            }
        ];
    }

    goToPage(page: number): void {
        if (page < 1 || page > this.totalPages || page === this.currentPage) {
            return;
        }

        this.currentPage = page;
        this.cargarEmpleados();
    }

    getPagesArray(): number[] {
        return Array(this.totalPages).fill(0).map((x, i) => i + 1);
    }
}