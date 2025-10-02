import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-principal-empleados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-principal-empleados.component.html',
  styleUrls: ['./pagina-principal-empleados.component.css']
})
export class PaginaPrincipalEmpleadosComponent {}
