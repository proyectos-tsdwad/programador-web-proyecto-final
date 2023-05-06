import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BookModule,
    CartModule,
    PagesRoutingModule
  ],
  exports: [
    HomeModule,
    BookModule,
    CartModule
  ]
})
export class PagesModule { }
