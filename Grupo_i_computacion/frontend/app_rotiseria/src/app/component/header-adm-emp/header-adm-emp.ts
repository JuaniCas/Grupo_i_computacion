import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'header-adm-emp',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-adm-emp.html',
  styleUrls: ['./header-adm-emp.css'],
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() avatarSrc = '';
  @Input() closeLink: string | any[] | null = null;
  
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('id_usuario');
    this.router.navigateByUrl('/iniciar_sesion');
  }
}