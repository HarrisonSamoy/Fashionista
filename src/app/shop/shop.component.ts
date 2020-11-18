import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { CompanyService } from '../service/company.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  companys: Company[];
  cart: Cart;
  searchFormData: any = {};

  constructor(private productService: ProductService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( products => {
      this.products=products;
    });
    this.companyService.getCompanies().subscribe( companys => {
      this.companys=companys;
    })
    this.cart = new Cart();
    if (localStorage.getItem('cart') != undefined) {
      this.cart.fillCart(localStorage.getItem('cart'));
    }
    else {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

  addToCart(code: string, product: Product): void {
    this.cart.addItem(code, product);
    console.log("ADDED")
    console.log(this.cart);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  search(): void {
    if (this.searchFormData.company != undefined && this.searchFormData.company != "all" ) {
      this.productService.getProductByCompanyId(this.searchFormData.company).subscribe( products => {
        this.products = products;
      }) 
    }
    else {
      this.productService.getProducts().subscribe( products => {
        this.products = products;
      });
    }
    //location.reload();
  }

}
