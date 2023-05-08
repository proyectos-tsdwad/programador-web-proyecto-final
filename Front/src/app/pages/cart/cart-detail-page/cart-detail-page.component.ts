import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-cart-detail-page',
  templateUrl: './cart-detail-page.component.html',
  styleUrls: ['./cart-detail-page.component.css']
})
export class CartDetailPageComponent {

  constructor(private navigationService: NavigationService) { }

  onClickConfirmPurchase() {
    this.navigationService.navigateToCheckout();
  }
}
