import { Component} from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';

import { AppHeaderComponent } from '../../../component/header-opc/header-opc';
import { VerEmpleadosComponent } from '../../../component/empleados/ver-empleados/ver-empleados';


interface Empleado {
    id: number;
    nombre: string;
    mail: string;
    cargo: string;
}

@Component({
  selector: 'app-empleados',
  standalone: true, 
  imports: [CommonModule, RouterModule, AppHeaderComponent, VerEmpleadosComponent, RouterLink],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class Empleados {

}