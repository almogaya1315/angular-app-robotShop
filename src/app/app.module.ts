import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

//IS NOT IMPORTED BY @NgModule BECAUSE IT EXPORTS IN app-routing.module.ts -> exports: [RouterModule]
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    //SignInComponent,
    //TemplateFormControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, //NEEDED HERE AND IN EACH FEATURE MODULE
    ReactiveFormsModule,
    UserModule
    //NO NEED TO IMPORT -> AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
