import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../../../component/header-opc/header-opc';
import { VerPedidos } from '../../../component/pedidos/ver-pedidos/ver-pedidos';



@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, VerPedidos ], 
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class Pedidos {

}