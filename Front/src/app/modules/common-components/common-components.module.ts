import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCartComponent } from './button-cart/button-cart.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [ButtonCartComponent],
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  exports: [ButtonCartComponent],
})
export class CommonComponentsModule { }
