import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail-page/book-detail.component';
import { BookModule } from 'src/app/modules/book/book.module';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [CommonModule, BookModule],
  exports: [BookDetailComponent],
})
export class BookModule2 {}
