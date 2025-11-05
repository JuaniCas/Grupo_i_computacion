import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../../../services/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './abm.html',
  styleUrl: './abm.css'
})

export class AbmComponent implements OnInit {

  @Input() idUsuario!: string;
  @Input() tipoOperacion!: string;

  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuariosService: Usuarios,
    private router: Router
  ){
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.tipoOperacion === 'Editar' && this.idUsuario){

      this.usuarioForm.get('contraseña')?.clearValidators();
      this.usuarioForm.get('contraseña')?.updateValueAndValidity();

      this.usuariosService.getUsuario(this.idUsuario).subscribe(data => {
        this.usuarioForm.patchValue(data);
      },
      (error) => {
        console.error('Error al cargar los datos del usuario', error);
      });
    }
  }

  onSubmit() {
    if (this.usuarioForm.invalid) {
      return;
    }

    if (this.idUsuario && this.idUsuario !== 'null') {
      this.usuariosService.actualizarUsuario(this.idUsuario, this.usuarioForm.value).subscribe({
        next: (response) => {
          alert('Usuario actualizado con éxito');
          this.router.navigate(['/empleados']);
        },
        error: (error) => {
          console.error('Error al actualizar el usuario', error);
          alert('Error al actualizar el usuario');
        }
      });
    } else {

      const formData = this.usuarioForm.value;
      const dataParaEnviar = {
        ...formData,
        rol: 'empleado'
      }

      this.usuariosService.crearUsuario(dataParaEnviar).subscribe({
        next: (response) => {
          alert('Usuario creado con éxito');
          this.router.navigate(['/empleados']);
        },
        error: (error) => {
          console.error('Error al crear el usuario', error);
          alert('Error al crear el usuario');
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/empleados']);
  }

}
