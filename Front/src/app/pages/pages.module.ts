import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BookDashboardModule } from './admin/book-dashboard/book-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BookDashboardModule,
    PagesRoutingModule
  ],
  exports: [
    HomeModule,
    BookDashboardModule
  ]
})
export class PagesModule { }
