import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { BookCardModule } from '../../modules/book/book-card.module';



@NgModule({
  declarations: [
    CataloguePageComponent
  ],
  imports: [
    CommonModule,
    BookCardModule
  ],
  exports: [
    CataloguePageComponent
  ]
})
export class CatalogueModule { }

