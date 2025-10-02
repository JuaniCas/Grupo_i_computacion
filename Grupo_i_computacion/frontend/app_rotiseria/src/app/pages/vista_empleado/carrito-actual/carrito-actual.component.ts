import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito-actual',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito-actual.component.html',
  styleUrls: ['./carrito-actual.component.css']
})
export class CarritoActualComponent {}
