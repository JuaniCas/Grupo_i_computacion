import { Component, ViewChild } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';

import { AppHeaderComponent } from '../../../component/header-opc/header-opc';
import { VerEmpleadosComponent } from '../../../component/empleados/ver-empleados/ver-empleados';
// 👈 Importamos la nueva componente ABM (asegúrate de que esta ruta sea correcta)
import { AbmComponent } from '../../../component/abm.component/abm.component'; 
import { Card_Fila2 } from '../../../component/card-fila2/card-fila2';

interface Empleado {
    id: number;
    nombre: string;
    mail: string;
    cargo: string;
}

@Component({
  selector: 'app-empleados',
  standalone: true, 
  // 👈 Añadimos AbmComponent a los imports
  imports: [CommonModule, RouterModule, Card_Fila2, AppHeaderComponent, AbmComponent, VerEmpleadosComponent],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class Empleados {

    // 👈 Referencia a la modal ahora usa AbmComponent
    @ViewChild('addEditModal') addEditModal!: AbmComponent;

    constructor() {}

    // Función para abrir la modal de AGREGAR (llamada por el nuevo botón en el HTML)
    openAddModal(): void {
        if (this.addEditModal) {
            // Configuramos la modal para la acción de Agregar Empleado
            this.addEditModal.title = 'Agregar Nuevo Empleado';
            this.addEditModal.btnText = 'Crear';
            
            // Asignamos los Placeholders (títulos)
            this.addEditModal.field1Placeholder = 'Nombre';
            this.addEditModal.field2Placeholder = 'Email';
            this.addEditModal.field3Placeholder = 'Rol';
            
            // Limpiamos los valores iniciales
            this.addEditModal.field1Value = '';
            this.addEditModal.field2Value = '';
            this.addEditModal.field3Value = '';

            this.addEditModal.open(); // Abrimos la modal
        }
    }
}