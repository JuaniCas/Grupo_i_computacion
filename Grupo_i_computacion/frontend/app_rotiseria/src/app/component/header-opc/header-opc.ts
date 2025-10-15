import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'header-opc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-opc.html',
  styleUrls: ['./header-opc.css']
})
export class AppHeaderComponent {
  @Input() title: string = 'titulo';
  @Input() showButton: boolean = false;
  @Input() returnlink: string = '';
  @Input() profileImage: string = 'assets/logo.jpg';
  @Input() buttonText: string = 'boton';
  @Input() buttonLink: string = '';
}