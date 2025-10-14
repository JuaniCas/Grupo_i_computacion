
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // CAMBIO: usar guion_bajo para coincidir con las plantillas existentes (<app-card_base>)
  selector: 'app-card_base',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-base.html',
  styleUrls: ['./card-base.css']
})
export class Card_Base {
  @Input({ required: true }) link!: string;
}
