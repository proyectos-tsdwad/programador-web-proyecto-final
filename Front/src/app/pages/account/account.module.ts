import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PedidosItemComponent } from './pedidos-item/pedidos-item.component';

@NgModule({
  declarations: [
    AccountDetailsComponent,
    PedidosItemComponent
  ],
  imports: [CommonModule],
  exports: [],
})
export class AccountModule {}
