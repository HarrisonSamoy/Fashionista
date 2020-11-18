import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Product } from '../models/product';
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
  searchFormData: any = {};

  constructor(private productService: ProductService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( products => {
      this.products=products;
    });
    this.companyService.getCompanies().subscribe( companys => {
      this.companys=companys;
    })
  }

  addToCart(code: String): void {
    alert(code);
  }

  search(): void {
    console.log(this.searchFormData);
    location.reload();
  }

}
