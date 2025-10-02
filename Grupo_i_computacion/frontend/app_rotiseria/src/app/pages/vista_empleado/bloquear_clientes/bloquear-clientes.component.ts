import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bloquear-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bloquear-clientes.component.html',
  styleUrls: ['./bloquear-clientes.component.css']
})
export class BloquearClientesComponent {}
