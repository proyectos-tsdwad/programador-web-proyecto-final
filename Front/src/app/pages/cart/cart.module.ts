import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedBooksComponent } from './selected-books/selected-books.component';
import { SelectedBookDetailComponent } from './selected-book-detail/selected-book-detail.component';
import { CartDetailPageComponent } from './cart-detail-page/cart-detail-page.component';
import { DeliveryHelperComponent } from './delivery-helper/delivery-helper.component';



@NgModule({
  declarations: [
    SelectedBookDetailComponent,
    SelectedBooksComponent,
    CartDetailPageComponent,
    DeliveryHelperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartDetailPageComponent
  ]
})
export class CartModule { }
