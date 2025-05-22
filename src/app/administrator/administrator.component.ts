import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  adminActions = [
    { title: 'Usuários', description: 'Gerencie os usuários do sistema', icon: 'fas fa-users', route: '/admin/users' },
    { title: 'Produtos', description: 'Controle o estoque e os produtos', icon: 'fas fa-boxes', route: '/admin/products' },
    { title: 'Relatórios', description: 'Acompanhe as métricas de vendas', icon: 'fas fa-chart-line', route: '/admin/reports' }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
  
  ngOnInit(): void {
  }

}
