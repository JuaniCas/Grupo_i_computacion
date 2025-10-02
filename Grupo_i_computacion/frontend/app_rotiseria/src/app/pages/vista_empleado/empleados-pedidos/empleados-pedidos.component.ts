import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleados-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './empleados-pedidos.component.html',
  styleUrls: ['./empleados-pedidos.component.css']
})
export class EmpleadosPedidosComponent {}
