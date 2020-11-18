import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesListComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddProductComponent,
    ProductsListComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
