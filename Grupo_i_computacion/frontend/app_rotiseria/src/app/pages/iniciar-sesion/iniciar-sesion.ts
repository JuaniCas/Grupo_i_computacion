import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [RouterLink, ReactiveFormsModule,],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css'
})
export class IniciarSesion {

  loginForm: FormGroup;

  constructor( 
    private authService: Auth,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  irLogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (res:LoginResponse) => {
        alert('Login exitoso');
        console.log("respuesta login: ", res);

        const rol = this.authService.getUserRole();

        switch(rol){
          case 'admin':
            this.router.navigate(['/pagina_principal_admin']);
            break;
          case 'cliente':
            this.router.navigate(['/pagina_principal']);
            break;
          case 'empleado':
            this.router.navigate(['/pagina_principal_empleados']);
            break;
          default:
            console.warn('Rol de usuario no reconocido', rol);
            this.router.navigate(['/iniciar_sesion']);
            break;
        }
      },
      error: (err) => {
        alert('usuario o contraseña incorrectos');
        console.log("error en el login: ", err);
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('id_usuario');
      }
    });
  }

  submit(){
    console.log("valores form: ", this.loginForm.value);
    if(this.loginForm.valid){
      this.irLogin();
    } else {
      alert('Por favor complete todos los campos');
    }
  }
}
