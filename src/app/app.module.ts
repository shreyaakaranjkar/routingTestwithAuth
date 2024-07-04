import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { SingleProductComponent } from './shared/components/products/single-product/single-product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { SingleUserComponent } from './shared/components/users/single-user/single-user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { MaterialModule } from './shared/models/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    UsersComponent,
    AuthComponent,
    NavbarComponent,
    PagenotfoundComponent,
    SingleProductComponent,
    ProductFormComponent,
    SingleUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
