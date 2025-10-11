import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../../component/header-adm-emp/header-adm-emp';

@Component({
  selector: 'app-pagina-principal-admin',
  imports: [RouterLink, PageHeaderComponent],
  templateUrl: './pagina-principal-admin.html',
  styleUrl: './pagina-principal-admin.css'
})
export class PaginaPrincipalAdmin {

}
