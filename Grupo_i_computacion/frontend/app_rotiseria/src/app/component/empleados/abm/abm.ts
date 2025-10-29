import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-abm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abm.html',
  styleUrl: './abm.css'
})
export class AbmComponent {

  @Input() idUsuario!: string;
  @Input() tipoOperacion!: string;
}
