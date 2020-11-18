import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor() { }

  ngOnInit(): void {
    this.cart = new Cart();
    if (localStorage.getItem('cart') != undefined) {
      this.cart.fillCart(localStorage.getItem('cart'));
    }
    else {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  ngOnDestroy(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
