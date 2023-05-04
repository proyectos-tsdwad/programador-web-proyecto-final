import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookModule } from './book/book.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BookModule,
    PagesRoutingModule
  ],
  exports: [
    HomeModule,
    BookModule
  ]
})
export class PagesModule { }
