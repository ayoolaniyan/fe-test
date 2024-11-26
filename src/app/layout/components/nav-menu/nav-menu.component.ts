import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../modules/MenuItem';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  @Input() menuItems: MenuItem[] = [];

  isMobileMenuOpen = false;

  closeMobileMenu(): void {
    console.log("I was closed! ");
    this.isMobileMenuOpen = false;
  }
}
