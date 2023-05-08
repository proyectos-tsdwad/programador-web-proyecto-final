import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-button-cart',
  templateUrl: './button-cart.component.html',
  styleUrls: ['./button-cart.component.css']
})
export class ButtonCartComponent {

  constructor(private navigationService: NavigationService) { }

  onClickCartButton() {
    this.navigationService.navigateToCartDetail();
  }
}
