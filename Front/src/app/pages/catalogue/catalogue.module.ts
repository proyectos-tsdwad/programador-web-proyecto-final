import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { BookModule } from '../../modules/book/book.module';



@NgModule({
  declarations: [
    CataloguePageComponent
  ],
  imports: [
    CommonModule,
    BookModule
  ],
  exports : [
    CataloguePageComponent
  ]
})
export class CatalogueModule { }

