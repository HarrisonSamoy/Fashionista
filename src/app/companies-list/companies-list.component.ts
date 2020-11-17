import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data=> {
      this.companies=data
      console.log(this.companies); 
    });
  }

}
