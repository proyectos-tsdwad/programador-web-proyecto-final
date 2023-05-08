import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BookDashboardModule } from './admin/book-dashboard/book-dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CheckoutModule } from './checkout/checkout.module';
import { BookDetailModule } from './book/book.module';
import { CartModule } from './cart/cart.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BookDetailModule,
    CartModule,
    PagesRoutingModule,
    BookDashboardModule,
    AccountModule,
    PagesRoutingModule,
    CheckoutModule
  ],
<<<<<<< HEAD
  exports: [HomeModule, BookModule2, BookDashboardModule, CheckoutModule],
=======
  exports: [
    HomeModule,
    BookDetailModule,
    CartModule,
    BookDashboardModule,
    AccountModule
  ]
>>>>>>> dev
})
export class PagesModule { }
