import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verificar-stock',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './verificar-stock.component.html',
  styleUrls: ['./verificar-stock.component.css']
})
export class VerificarStockComponent {}
