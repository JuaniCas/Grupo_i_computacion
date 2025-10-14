import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterModule } from '@angular/router';


import { Card_Fila2, CardFila2ActionButton } from '../../../component/card-fila2/card-fila2';

interface Producto {
    id: number;
    nombre: string;
    categoria: string;
    precio: number;
}

@Component({
  selector: 'app-editar-productos',
  standalone: true,

  imports: [CommonModule, RouterModule, Card_Fila2], 
  templateUrl: './editar-productos.html',
  styleUrl: './editar-productos.css'
})
export class EditarProductos {

    productos: Producto[] = [
        { id: 1, nombre: 'Hamburguesa Clásica', categoria: 'Comida', precio: 12.50 },
        { id: 2, nombre: 'Refresco Cola', categoria: 'Bebida', precio: 3.00 },
        { id: 3, nombre: 'Papas Fritas', categoria: 'Acompañamiento', precio: 4.50 },
    ];



    eliminarProducto(id: number, nombre: string): void {
        if (confirm(`¿Estás seguro de que quieres eliminar ${nombre}?`)) {

            this.productos = this.productos.filter(p => p.id !== id);
            console.log(`${nombre} eliminado.`);
        }
    }

    getActions(producto: Producto): CardFila2ActionButton[] {
        return [
            {
                text: 'Editar',

                link: '/editar_producto_detalle/' + producto.id, 
                class: 'btn btn-dark btn-sm btn-mini' 
            },
            {
                text: 'Eliminar',

                action: () => this.eliminarProducto(producto.id, producto.nombre),
                class: 'btn btn-danger btn-sm btn-mini' 
            }
        ];
    }
}