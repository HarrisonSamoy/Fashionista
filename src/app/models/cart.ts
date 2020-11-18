import { elementAt } from 'rxjs/operators';
import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {

    items: CartItem[];
    total: number;

    constructor() {
        this.items = [];
        this.total = 0;
    }

    public fillCart(json:string) {
        let jsonObj = JSON.parse(json);
        for (var i=0; i < jsonObj['items'].length; i++) {
            this.items.push(jsonObj['items'][i]);
        }
        this.resetTotal();
    }

    public addItem(code:string, product:Product) {
        let added = false;
        this.items.forEach((element) => {
            if (code == element.product_id) {
                element.quantity++;
                element.totalPrice = element.totalPrice + element.unitPrice;
                added = true;
                //added another item
            }
        })
        if (!added) {
            this.items.push(new CartItem(code, product.name, product.price, product.image));
        }
        this.resetTotal();
    }
    public removeItem(index:number) {
        this.items.splice(index, 1)
    }
    public increaseQuantity(code:string) {
        this.items.forEach( (element) => {
            if(element.product_id == code) {
              element.quantity++;
              element.totalPrice = element.totalPrice + element.unitPrice;
            }
        });
        this.resetTotal();
    }
    public decreaseQuantity(code:string) {
        this.items.forEach( (element, index) => {
            if(element.product_id == code) {
              element.quantity--;
              if (element.quantity == 0) {
                this.removeItem(index);
              }
              else {
                element.totalPrice = element.totalPrice - element.unitPrice; 
              }
            }
        });
        this.resetTotal();
    }
    public resetTotal() {
        this.total = 0;
        this.items.forEach( (element) => {
            this.total = this.total + element.totalPrice;
        })
    }
}
