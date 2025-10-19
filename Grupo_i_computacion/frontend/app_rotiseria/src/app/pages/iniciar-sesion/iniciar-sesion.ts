import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormLabelCorreoContrasena } from '../../component/form-label-correo-contrasena/form-label-correo-contrasena';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [RouterLink, FormLabelCorreoContrasena],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css'
})
export class IniciarSesion {

  constructor( 
    private authService: Auth
  ){}

  irLogin(){
    this.authService.login().subscribe({
      next: (res) => {
        alert('Login exitoso');
        console.log("respuesta", res);
      },
      error: (err) => {
        alert('usuario o contraseña incorrectos');
        console.log("error", err);
      }
    });
  }
}
