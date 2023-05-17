import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail-page/book-detail.component';
import { BookCardModule } from 'src/app/modules/book/book-card.module';
import { BookCataloguePageComponent } from './book-catalogue-page/catalogue-page.component';

@NgModule({
  declarations: [
    BookDetailComponent,
    BookCataloguePageComponent

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
