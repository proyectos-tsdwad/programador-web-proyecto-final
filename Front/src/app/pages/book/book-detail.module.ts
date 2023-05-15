import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail-page/book-detail.component';
import { BookCardModule } from 'src/app/modules/book/book-card.module';

@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BookCardModule
  ],
  exports: [
    BookDetailComponent
  ]
})
export class BookDetailModule { }
