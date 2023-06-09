import { Component } from '@angular/core';
import { DeliveryService } from './../../../services/delivery/delivery.service';

@Component({
  selector: 'app-delivery-helper',
  templateUrl: './delivery-helper.component.html',
  styleUrls: ['./delivery-helper.component.css'],
})
export class DeliveryHelperComponent {
  postalCode: string;
  shippingCost: number;
  postalCodeError: boolean;

  constructor(private deliveryService: DeliveryService) {
    this.postalCode = '';
    this.shippingCost = 0;
    this.postalCodeError = false;
  }

  calcularEnvio() {
    this.shippingCost = this.deliveryService.calculateShippingCost(
      parseInt(this.postalCode, 10)
    );
  }

  validatePostalCode() {
    const postalCodePattern = /^[0-9]{4}$/;
    this.postalCodeError = !postalCodePattern.test(this.postalCode);
  }
}
