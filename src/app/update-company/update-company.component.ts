import { createNgModule } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  companyFormData: any = {};
  errors: any = [];
  companyDetails: Company;
  done: boolean = false;

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe 
    (params => {
      this.companyService.getCompanyById(params.id).subscribe
      (company => {
        this.companyDetails = company
        this.done=true;
      });
    }
    );
  }

  update() {
    this.companyService.updateCompanyById(this.companyFormData, this.companyFormData._id).subscribe(() => {
      this.router.navigate(['/companies-list']);
    }, (errorResponse) => {
      this.errors.push(errorResponse.error.error);
    });
  }

}
