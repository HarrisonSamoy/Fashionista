import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productFormData: any = {};
  errors: any = [];
  productDetails: Product;
  done: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe 
    (params => {
      this.productService.getProductById(params.id).subscribe
      (product => {
        this.productDetails = product
        this.done=true;
      });
    }
    );
  }

  update() {
    this.productService.updateProduct(this.productFormData, this.productDetails["_id"]).subscribe( (product) => {
      this.router.navigate(['/products-list',this.productDetails["company_id"]]);
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

}
