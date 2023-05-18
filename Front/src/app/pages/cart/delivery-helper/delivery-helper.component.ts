import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-helper',
  templateUrl: './delivery-helper.component.html',
  styleUrls: ['./delivery-helper.component.css'],
})
export class DeliveryHelperComponent {
  postalCode: number;

  constructor() {
    this.postalCode = 0;
  }
  calculateShippingCost(postalCode: number): number {
    const insideFederalCapital = 1000;
    const outsideOfFederalCapital = 2000;
    //console.log('funciona! Codigo postal:', postalCode);
    const cost =
      postalCode > 1000 && postalCode < 1600
        ? insideFederalCapital
        : outsideOfFederalCapital;

    return cost;
  }
  calcularEnvio() {
    const cost = this.calculateShippingCost(this.postalCode);
    console.log('Costo de envío:', cost);
  }
}
