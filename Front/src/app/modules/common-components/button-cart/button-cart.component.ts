import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-cart',
  templateUrl: './button-cart.component.html',
  styleUrls: ['./button-cart.component.css']
})
export class ButtonCartComponent {

  constructor(private router: Router) { }

  onClickCartButton() {
    this.router.navigate(['/cart-detail']);
  }
}
