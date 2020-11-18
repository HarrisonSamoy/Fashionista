import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormData: any = {};
  errors: any = [];
  companyCode: String;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyCode = params.code
    });
  }

  add() {
    this.productFormData.company_id = this.companyCode;
    this.productService.addProduct(this.productFormData).subscribe( () => {
      this.router.navigate(['products-list/', this.companyCode]) //change to get products for company
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

}
