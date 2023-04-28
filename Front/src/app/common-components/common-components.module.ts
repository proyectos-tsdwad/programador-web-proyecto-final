import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from './cart-button/cart-button.component';

@NgModule({
  declarations: [CartButtonComponent],
  imports: [CommonModule],
  exports: [
    CartButtonComponent, // Agrega esto para exportar el componente
  ],
})
export class CommonComponentsModule {}
