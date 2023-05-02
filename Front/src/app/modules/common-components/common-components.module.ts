import { CartButtonComponent } from './cart-button/cart-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCartComponent } from './button-cart/button-cart.component';

@NgModule({
  declarations: [CartButtonComponent, ButtonCartComponent],
  imports: [CommonModule],
  exports: [CartButtonComponent],
})
export class CommonComponentsModule {}
