import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;
  isMobileOpen = false;
  isMobile = false;

  isAdmin = true;

  menuItems = [
    { label: 'Home', icon: 'fas fa-home', route: '/home' },
    { label: 'Produtos', icon: 'fas fa-box', route: '/products' },
    { label: 'Carrinho', icon: 'fas fa-shopping-cart', route: '/cart' },
    { label: 'Contato', icon: 'fas fa-envelope', route: '/contato' }
  ];

  adminItems = [
    { label: 'Administrador', route: '/administrator', icon: 'fas fa-user-shield' },
  ];

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isMobileOpen = false;
    }
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.isCollapsed = this.isCollapsed;
  }

  toggleMobileSidebar() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobileSidebar() {
    if (this.isMobile) {
      this.isMobileOpen = false;
    }
  }
}