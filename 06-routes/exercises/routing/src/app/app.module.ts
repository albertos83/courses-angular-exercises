import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
