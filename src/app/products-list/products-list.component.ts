import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=> {
      this.products=data
      console.log(this.products); 
    });
  }

  update(id) {
    this.router.navigate(['update-product/',id]);
  }

  delete(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
    });
    location.reload();
  }

}
