import { DeliveryService } from './../../../services/delivery/delivery.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-helper',
  templateUrl: './delivery-helper.component.html',
  styleUrls: ['./delivery-helper.component.css'],
})
export class DeliveryHelperComponent {
  postalCode: number;

  constructor(private deliveryService: DeliveryService) {
    this.postalCode = 0;
  }

  calcularEnvio() {
    const cost = this.deliveryService.calculateShippingCost(this.postalCode);
    alert('Costo de envío: ' + cost + '$');
  }
}
