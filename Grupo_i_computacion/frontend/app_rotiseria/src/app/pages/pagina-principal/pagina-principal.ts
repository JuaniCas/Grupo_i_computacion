import { Component } from '@angular/core';
import { CardHamburguesaDoble } from '../../component/card-hamburguesa-doble/card-hamburguesa-doble';
import { HeaderCliente } from '../../component/header-cliente/header-cliente';


@Component({
  selector: 'app-pagina-principal',
  imports: [ CardHamburguesaDoble, HeaderCliente],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css'
})
export class PaginaPrincipal {

}
