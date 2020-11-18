import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  textPresent: boolean = false;
  msg: string;

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

  public confirm() {
    this.textPresent = true;
    if (this.cart.items.length == 0) {
      this.msg = "You have not added any items to your cart"
    }
    else {
      this.msg = "Your order has been placed"

      // Where you would normally route to credit card form
      this.cart = new Cart();
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  public up(code:string) {
    this.cart.increaseQuantity(code);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  public down(code:string) {
    this.cart.decreaseQuantity(code);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
