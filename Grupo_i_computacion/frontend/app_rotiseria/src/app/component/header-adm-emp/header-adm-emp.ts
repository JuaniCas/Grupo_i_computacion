import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  
}