

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 

interface Promocion {
    id: number;
    nombre: string;
    activa: boolean;
}

@Component({
  selector: 'app-promociones',
  standalone: true,

  imports: [CommonModule, RouterModule], 
  templateUrl: './promociones.html',
  styleUrl: './promociones.css' 
})
export class Promociones {


    promociones: Promocion[] = [
        { id: 1, nombre: '2x1 en Pizzas', activa: true },
        { id: 2, nombre: 'Menú del día', activa: false },
        { id: 3, nombre: 'Happy hour -%15', activa: true },
    ];


    toggleActiva(id: number, nombre: string): void {
        const promo = this.promociones.find(p => p.id === id);
        if (!promo) return;

        const action = promo.activa ? 'desactivar' : 'activar';

        if (confirm(`¿Estás seguro de que quieres ${action} la promoción: ${nombre}?`)) {
            promo.activa = !promo.activa;
            console.log(`Promoción ${nombre} ${promo.activa ? 'activada' : 'desactivada'}.`);
        }
    }
    

    sendMail(nombre: string): void {
        alert(`Preparando mail para la promoción: ${nombre}`);
    }
}