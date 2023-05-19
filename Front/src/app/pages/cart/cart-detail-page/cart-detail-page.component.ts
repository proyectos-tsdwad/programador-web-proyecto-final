import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectedBookDto } from 'src/app/models/book/book-model';
import { CartService } from 'src/app/services/cart/cart.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-cart-detail-page',
  templateUrl: './cart-detail-page.component.html',
  styleUrls: ['./cart-detail-page.component.css'],
})
export class CartDetailPageComponent implements OnInit, OnDestroy {
  cartSub!: Subscription;
  totalItemSub!: Subscription;
  books: SelectedBookDto[] = [];
  totalItems: number = 0;

  constructor(
    private navigationService: NavigationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartSubscribe();
    this.totalItemSubscribe();
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
    this.totalItemSub.unsubscribe();
  }

  cartSubscribe() {
    this.cartSub = this.cartService
      .getcartUpdatedListener()
      .subscribe((books: SelectedBookDto[]) => {
        this.books = books;
      });
  }

  totalItemSubscribe() {
    this.totalItemSub = this.cartService
      .getTotalItemsListener()
      .subscribe((totalItems: number) => {
        this.totalItems = totalItems;
      });
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onClickConfirmPurchase() {
    this.navigationService.navigateToCheckout();
  }
}
