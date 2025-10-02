import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-validar-cuentas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './validar-cuentas.component.html',
  styleUrls: ['./validar-cuentas.component.css']
})
export class ValidarCuentasComponent {
  clientes = [
    { numero: 1 },
    { numero: 2 },
    { numero: 3 }
  ];
}
