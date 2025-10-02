import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormLabelCorreoContrasena } from '../../component/form-label-correo-contrasena/form-label-correo-contrasena';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [RouterLink, FormLabelCorreoContrasena],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css'
})
export class IniciarSesion {

}
