
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CompaniesListComponent } from './companies-list/companies-list.component'

import { AuthGuard } from './auth/auth.guard';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'add-company', component:AddCompanyComponent, canActivate: [AuthGuard]},
  { path: 'update-company/:id', component:UpdateCompanyComponent, canActivate: [AuthGuard]},
  { path: 'add-product/:code', component:AddProductComponent, canActivate: [AuthGuard]},
  { path: 'products-list/:code', component:ProductsListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
