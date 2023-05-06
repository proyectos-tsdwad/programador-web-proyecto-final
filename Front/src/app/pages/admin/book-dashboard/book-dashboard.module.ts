import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BookDashboardPageComponent } from './book-dashboard-page/book-dashboard-page.component';



@NgModule({
  declarations: [
    BookDashboardPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports : [
    BookDashboardPageComponent
  ]
})
export class BookDashboardModule { }
