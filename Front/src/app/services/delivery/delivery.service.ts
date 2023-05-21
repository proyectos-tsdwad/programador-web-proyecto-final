import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor() {}

  calculateShippingCost(postalCode: number): number {
    const insideFederalCapital = 1000;
    const outsideOfFederalCapital = 2000;

    const cost =
      postalCode > 1000 && postalCode < 1600
        ? insideFederalCapital
        : outsideOfFederalCapital;

    return cost;
  }
}
