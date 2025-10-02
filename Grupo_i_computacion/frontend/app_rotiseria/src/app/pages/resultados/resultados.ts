import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardHamburguesaDoble } from '../../component/card-hamburguesa-doble/card-hamburguesa-doble';

@Component({
  selector: 'app-resultados',
  imports: [RouterLink, CardHamburguesaDoble],
  templateUrl: './resultados.html',
  styleUrl: './resultados.css'
})
export class Resultados {

}
