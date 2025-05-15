import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Tênis Esportivo',
      price: 199.90,
      imageUrl: 'assets/tenis-esportivo.jpg'
    },
    {
      id: 2,
      name: 'Camisa Social Azul',
      price: 89.90,
      imageUrl: 'assets/camisa-social-azul.jpg'
    },
    {
      id: 3,
      name: 'Relógio de Pulso',
      price: 249.90,
      imageUrl: 'assets/relogio.jpg'
    },
    {
      id: 4,
      name: 'Calça Jeans',
      price: 129.90,
      imageUrl: 'assets/calca-jeans.jpg'
    },
    {
      id: 5,
      name: 'Óculos de Sol',
      price: 99.90,
      imageUrl: 'assets/oculos-de-Sol.jpg'
    },
    {
      id: 6,
      name: 'Mochila de Couro',
      price: 159.90,
      imageUrl: 'assets/mochila.jpg'
    },
    {
      id: 7,
      name: 'Camiseta Polo',
      price: 49.90,
      imageUrl: 'assets/camisa-polo.jpg'
    },
    {
      id: 8,
      name: 'Sandália',
      price: 129.90,
      imageUrl: 'assets/sandalia.jpg'
    },
    {
      id: 9,
      name: 'Jaqueta de Couro',
      price: 299.90,
      imageUrl: 'assets/jaqueta.jpeg'
    },
  ];

  addToCart(product: any) {
    console.log('Adicionado ao carrinho:', product);
  }
}
