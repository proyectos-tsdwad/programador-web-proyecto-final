import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail-page/book-detail.component';
import { BookCardModule } from 'src/app/modules/book/book-card.module';
import { BookCataloguePageComponent } from './book-catalogue-page/catalogue-page.component';
import { SearchBookNotFoundComponent } from './search-book-not-found/search-book-not-found.component';
import { SelectedBookNotFoundComponent } from './selected-book-not-found/selected-book-not-found.component';

@NgModule({
  declarations: [
    BookDetailComponent,
    BookCataloguePageComponent,
    SearchBookNotFoundComponent,
    SelectedBookNotFoundComponent
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
