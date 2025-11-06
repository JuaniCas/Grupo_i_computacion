import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';
import { AbmPedidosComponent } from '../../../component/pedidos/abm-pedidos/abm-pedidos';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderComponent,
    AbmPedidosComponent 
  ],
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.css']
})
export class PedidoComponent implements OnInit {

  idPedido!: string | null;
  tipoOperacion!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idPedido = this.route.snapshot.paramMap.get('id');
    this.tipoOperacion = this.route.snapshot.paramMap.get('tipo_op');
    
  }
}