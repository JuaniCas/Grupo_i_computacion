import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormLabelCorreoContrasena } from '../../component/form-label-correo-contrasena/form-label-correo-contrasena';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormLabelCorreoContrasena],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

}
