import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BookDashboardModule } from './admin/book-dashboard/book-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookModule } from './book/book.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BookModule,
    BookDashboardModule,
    PagesRoutingModule
  ],
  exports: [
    HomeModule,
    BookModule,
    BookDashboardModule
  ]
})
export class PagesModule { }
