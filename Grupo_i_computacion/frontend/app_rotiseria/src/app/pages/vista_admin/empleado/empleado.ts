import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';
import { AbmComponent } from '../../../component/empleados/abm/abm';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [AppHeaderComponent, AbmComponent],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {
  id_usuario!: string;
  tipo_op!: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id_usuario = this.route.snapshot.paramMap.get('id') || '';
    this.tipo_op = this.route.snapshot.paramMap.get('tipo_op') || '';

    console.log('id_usuario:', this.id_usuario);
    console.log('Tipo Operación:', this.tipo_op);
  }
}
