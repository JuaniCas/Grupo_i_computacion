import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Card_Fila2, CardFila2ActionButton } from '../../card-fila2/card-fila2';
import { PedidosService } from '../../../services/pedidos';


interface Pedido {
  id_pedido: number;
  usuario: string; 
  precio_total: string;
  estado: string;
  descripcion: string;
  horario: string;
  direccion: string;
}

@Component({
  selector: 'app-ver-pedidos',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    Card_Fila2,        
  ],
  templateUrl: './ver-pedidos.html', 
  styleUrls: ['./ver-pedidos.css']
})
export class VerPedidos implements OnInit {

  pedidos: Pedido[] = []; 
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private router: Router,
    private pedidosService: PedidosService 
  ) {}

  ngOnInit(): void {
    this.cargarPedidos();
  }

  cargarPedidos(): void {
    const filtros = { 
      page: this.currentPage 
    };

    this.pedidosService.getPedidos(filtros).subscribe({
      next: (respuestaCompleta) => {

        this.pedidos = respuestaCompleta[0];
        this.totalPages = respuestaCompleta[1].pages;
        this.currentPage = respuestaCompleta[1].page;
      },
      error: (error) => {
        console.error('Error al cargar pedidos:', error);
        alert('No se pudieron cargar los pedidos.');
      }
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.cargarPedidos(); 
  }

  getPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }


  getActions(pedido: Pedido): CardFila2ActionButton[] {
    return [
      {
        text: 'Editar',
        link: `/pedido/${pedido.id_pedido}/Editar`, 
        class: 'btn btn-sm btn-primary'
      },
      {
        text: 'Eliminar',
        action: () => this.eliminarPedido(pedido),
        class: 'btn btn-sm btn-danger'
      }
    ];
  }

  eliminarPedido(pedido: Pedido) {
    if (!confirm(`¿Estás seguro de eliminar el Pedido #${pedido.id_pedido}?`)) {
      return;
    }
    
    this.pedidosService.eliminarPedido(pedido.id_pedido.toString()).subscribe({
      next: (response) => {
        alert('Pedido eliminado exitosamente.');
        this.cargarPedidos(); 
      },
      error: (error) => {
        console.error('Error al eliminar el pedido:', error);
        alert('No se pudo eliminar el pedido.');
      }
    });
  }
}