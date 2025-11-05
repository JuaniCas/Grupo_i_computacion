import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms'; 


import { Register } from '../../services/register'; 



@Component({
  selector: 'app-registro',
  
  imports: [RouterLink, ReactiveFormsModule], 
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  registroForm: FormGroup;

  constructor( 
    private registerService: Register,
    private router: Router, 
    private formBuilder: FormBuilder 
  ){
    
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
      nombre: ['', Validators.required], 
      apellido: ['', Validators.required], 
      direccion: ['', Validators.required], 
      celular: ['', Validators.required], 
      
      contraseña: ['', Validators.required],
      confirmarContrasena: ['', Validators.required] 
    });
  }

  registrarUsuario(){
    
    
    const { confirmarContrasena, ...formData } = this.registroForm.value;

    
    const dataToSend = {
        ...formData, 
        rol: 'cliente' 
    };
    
    this.registerService.register(dataToSend).subscribe({
      next: (res: any) => {
        alert('¡Registro exitoso! Ya puedes iniciar sesión.');
        console.log("Respuesta del registro:", res);
        
        
        this.router.navigateByUrl('/iniciar_sesion'); 
      },
      error: (err: any) => {
        alert('Error: No se pudo completar el registro. Revise los datos e intente de nuevo.');
        console.log("Error de registro:", err);
      }
    });
  }

  submit(){
    if(this.registroForm.valid){
        
        if (this.registroForm.value.contraseña !== this.registroForm.value.confirmarContrasena) {
             alert('Las contraseñas no coinciden.');
             return; 
        }
      this.registrarUsuario();
    } else {
      alert('Por favor complete todos los campos requeridos y verifique el formato del email.');
    }
  }
}