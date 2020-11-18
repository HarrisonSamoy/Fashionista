import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  company: string;

  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.company = params.code; 
        this.productService.getProductByCompanyId(params.code).subscribe(data=> {
          this.products=data
          console.log(this.products); 
        });
      }
  )};

  addProduct(): void {
    this.router.navigate(['add-product/',this.company]);
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
