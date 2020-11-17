import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyFormData: any = {};
  errors: any = [];

  constructor(public companyService: CompanyService, public router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.companyService.addCompany(this.companyFormData).subscribe(() => {
      this.router.navigate(['/companies-list']);
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

}
