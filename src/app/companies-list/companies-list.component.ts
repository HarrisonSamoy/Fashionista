import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { Company } from '../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];

  constructor(public companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data=> {
      this.companies=data
      console.log(this.companies); 
    });
  }

  delete(code:String): void {
    if(confirm("delete?")) {
      this.companyService.deleteCompanyById(code).subscribe( (data) => {
        console.log(data);
      })
    }
    location.reload();
  }

  addProduct(code:String): void {
    this.router.navigate(['add-product/',code]);
  }

  update(code:String): void {
    this.router.navigate(['update-company/',code]);
  }

  showProducts(code:String): void {
    this.router.navigate(['products-list/',code]);
  }
}
