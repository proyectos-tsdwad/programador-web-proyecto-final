import { Component, Input } from '@angular/core';
import { Purchase } from 'src/app/models/user/purchase-model';

@Component({
  selector: 'app-pedidos-item',
  templateUrl: './pedidos-item.component.html',
  styleUrls: ['./pedidos-item.component.css']
})
export class PedidosItemComponent {
  @Input()
  purchases!: Purchase[];
}
