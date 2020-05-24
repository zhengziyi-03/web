import { Component } from '@angular/core';
import { MENUS, PRODUCTS } from '../data';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  menus =  MENUS;
  products = PRODUCTS;
}

