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
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('email', res.email);
        this.router.navigateByUrl('/pagina_principal_admin');
      },
      error: (err) => {
        alert('usuario o contraseña incorrectos');
        console.log("error en el login: ", err);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
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
