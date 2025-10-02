import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardHamburguesaDoble } from '../../component/card-hamburguesa-doble/card-hamburguesa-doble';


@Component({
  selector: 'app-pagina-principal',
  imports: [RouterLink, CardHamburguesaDoble],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css'
})
export class PaginaPrincipal {

}
