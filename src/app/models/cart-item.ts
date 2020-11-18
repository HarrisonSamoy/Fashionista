export class CartItem {
    product_id: string;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice:number;
    image: string;

    constructor(id:string, name:string, price:number, img:string) {
        this.product_id = id;
        this.name = name;
        this.quantity = 1;
        this.unitPrice = price;
        this.totalPrice = this.unitPrice;
        this.image = img;
    }
}
