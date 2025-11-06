import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidosService } from '../../../services/pedidos';
import { Usuarios } from '../../../services/usuarios';

@Component({
  selector: 'app-abm-pedidos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './abm-pedidos.html',
  styleUrls: ['./abm-pedidos.css']
})
export class AbmPedidosComponent implements OnInit {

  @Input() idPedido!: string;
  @Input() tipoOperacion!: string;

  pedidoForm: FormGroup;
  titulo: string = '';
  usuarios: any[] = [];
  estados: string[] = ['Pendiente', 'En Proceso', 'Entregado', 'Cancelado'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pedidosService: PedidosService,
    private usuariosService: Usuarios
  ) {

    this.pedidoForm = this.fb.group({
      id_usuario: ['', Validators.required],
      precio_total: [0, [Validators.required, Validators.min(1)]],
      descripcion: ['', Validators.required],
      horario: ['', Validators.required],
      estado: ['Pendiente', Validators.required]
    });
  }

  ngOnInit(): void {

    this.cargarListas();

    this.titulo = this.tipoOperacion === 'Alta' ? 'Crear Pedido' : 'Editar Pedido';

    if (this.tipoOperacion.toLowerCase() === 'editar' && this.idPedido) {
      this.pedidosService.getPedido(this.idPedido).subscribe({
        next: (data) => {
          this.pedidoForm.patchValue(data); 
        },
        error: (err) => console.error("Error al cargar el pedido:", err)
      });
    }
  }

  cargarListas(): void {

    const filtros = {
      rol: 'cliente',
      per_page: 9999
    }

    this.usuariosService.getUsuarios(filtros).subscribe({
      next: (respuesta) => {
        this.usuarios = respuesta[0];
      },
      error: (err) => console.error("Error al cargar usuarios:", err)
    });
  }


  onSubmit() {
    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched(); //para mostar errores
      return;
    }

    if (this.tipoOperacion.toLowerCase() === 'editar') {
      this.pedidosService.actualizarPedido(this.idPedido, this.pedidoForm.value).subscribe({
        next: () => {
          alert('Pedido actualizado con éxito');
          this.router.navigate(['/pedidos']);
        },
        error: (err) => alert('Error al actualizar el pedido')
      });
    } else {
      this.pedidosService.crearPedido(this.pedidoForm.value).subscribe({
        next: () => {
          alert('Pedido creado con éxito');
          this.router.navigate(['/pedidos']);
        },
        error: (err) => alert('Error al crear el pedido')
      });
    }
  }

  cancelar() {
    this.router.navigate(['/pedidos']);
  }
}