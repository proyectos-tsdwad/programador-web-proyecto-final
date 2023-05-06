import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BookDashboardModule } from './admin/book-dashboard/book-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookModule2 } from './book/book.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BookModule2,
    BookDashboardModule,
    PagesRoutingModule,
  ],
  exports: [HomeModule, BookModule2, BookDashboardModule],
})
export class PagesModule {}
